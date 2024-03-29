export const transformDomain = (domain: string) => {
  if (domain.startsWith("www.")) {
    domain = domain.substring(4);
  }

  return domain.replace(/\./g, "-");
};

export const groupByDate = (data: any[], yColumn: string) => {
  return sortByDate(data).map((obj) => ({
    [yColumn]: obj.name,
    device: obj.device,
    day: new Date(obj.time).toLocaleDateString(),
  }));
};

function getWeekNumber(date: Date) {
  // Copy date so don't modify original
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil(
    ((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7
  );
  // Return week number
  return weekNo;
}

export const groupByWeek = (data: any[], yColumn: string) => {
  return sortByDate(data).map((obj) => {
    const date = new Date(obj.time);
    const year = date.getFullYear();
    const week = getWeekNumber(date);
    return {
      [yColumn]: obj.name,
      week: `${year}-W${week}`,
    };
  });
};

export const groupByMonth = (data: any[], yColumn: string) => {
  return data.map((obj) => {
    const date = new Date(obj.time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Adding 1 since getMonth() is zero-based
    return {
      [yColumn]: obj.name,
      month: `${year}-${month.toString().padStart(2, "0")}`,
    };
  });
};

const sortByDate = (data: any[]) => {
  return data.sort((a, b) => a.time - b.time);
};

export const getGroupedData = (key: string, event: string, data: any) => {
  let groupedData = groupByDate(data, event);

  switch (key) {
    case "week":
      // @ts-ignore
      groupedData = groupByWeek(data, event);
      break;
    case "month":
      // @ts-ignore
      groupedData = groupByMonth(data, event);
      break;
  }

  return groupedData;
};

export const getSummaryObject = (data: any, label: string) => {
  return {
    label,
    quantity: data[data.length - 1]?.[label],
    percentChange: getPercentChange(
      data[data.length - 1]?.[label],
      data[data.length - 2]?.[label]
    ),
  };
};

export const getPercentChange = (
  currentValue: number,
  previousValue: number
) => {
  const difference = currentValue - previousValue;
  const percentChange = (
    difference ? (difference / previousValue) * 100 : 0
  ).toFixed(2);

  if (Number(percentChange) > 1000) {
    return 1000;
  }
  return percentChange;
};

export const checkIfWithinSubscriptionThreshold = (
  type: string,
  newStoreTotal: number
) => {
  if (type === "basic") {
    if (newStoreTotal >= 1) {
      return false;
    }
    return true;
  }
  return false;
};

export const isChromiumBasedBrowser = () => {
  // @ts-expect-error - Property 'chrome' does not exist on type 'Window & typeof globalThis'
  let isChromium = window.chrome;
  let winNav = window.navigator;
  let vendorName = winNav.vendor;
  // @ts-expect-error - Property 'opr' does not exist on type 'Window & typeof globalThis'
  let isOpera = typeof window.opr !== "undefined";
  let isIEedge = winNav.userAgent.indexOf("Edg") > -1;
  let isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
    return true;
  } else if (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
    return true;
  } else {
    return false;
  }
};

export const getLiquidFileContents = (uid: string, storeId: string) =>
  `{% capture reelsSettingsLiquid %}
  {
    "id": "{{ section.settings.id }}",
  }
{% endcapture %}

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/paxify-llc/builds@main/reelife/paxify-reelife.css">

<script>
  function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
  }

  loadScript("https://cdn.jsdelivr.net/gh/paxify-llc/builds@main/reelife/paxify-reelife.js", function () {
    const settings = {{ reelsSettingsLiquid | strip_newlines | remove: "  " }};
    const reels = new ReelsInitializer({
      uid: "${uid}",
      storeId: "${storeId}",
      elementId: settings.id,
    });

    reels.render();
  });
</script>

<style>
  .shared-dom {
    width: 100%;
    height: 110px;
  }
  .sub-rect {
    border-radius: 100%;
    width: 70px;
    height: 70px;
    float: left;
    margin: 20px 20px 20px 0;
  }
  .pure-background {
    background-color: #eee;
  }

  @media (min-width: 769px) {
    .shared-dom {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>

<div id="{{ section.settings.id }}">
  <div class="shared-dom">
    <div class="sub-rect pure-background"></div>
    <div class="sub-rect pure-background"></div>
    <div class="sub-rect pure-background"></div>
    <div class="sub-rect pure-background"></div>
    <div class="sub-rect pure-background"></div>
    <div class="sub-rect pure-background"></div>
    <div class="sub-rect pure-background"></div>
    <div class="sub-rect pure-background"></div>
  </div>
</div>

{% schema %}
{
  "name": "Reelife",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "text",
      "id": "id",
      "label": "Container Id",
      "default": "reelife-stories"
    }
  ],
  "presets": [
    {
      "name": "Reelife"
    }
  ]
}
{% endschema %}`;
