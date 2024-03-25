export const collections = ["airpods", "phones", "watches"];

export type DropDownItemsType = {[key :string] : {[key : string] : number | string | string[]}}

export const Phones:DropDownItemsType  = {
  "iPhone 3G": {
    "release year": 2008,
    "display size": "3.5 inches",
    camera: "2 MP",
    "storage options": ["8", "16"],
    colors: ["Black", "White"],
  },
  "iPhone 4": {
    "release year": 2010,
    "display size": "3.5 inches",
    camera: "5 MP",
    "storage options": ["8", "16", "32"],
    colors: ["Black", "White"],
  },
  "iPhone 5": {
    "release year": 2012,
    "display size": "4 inches",
    camera: "8 MP",
    "storage options": ["16", "32", "64"],
    colors: ["Black", "White", "Silver"],
  },
  "iPhone 6": {
    "release year": 2014,
    "display size": "4.7 inches",
    camera: "8 MP",
    "storage options": ["16", "64", "128"],
    colors: ["Space Gray", "Silver", "Gold"],
  },
  "iPhone 7": {
    "release year": 2016,
    "display size": "4.7 inches",
    camera: "12 MP",
    "storage options": ["32", "128", "256"],
    colors: ["Black", "Silver", "Gold", "Rose Gold"],
  },
  "iPhone 8": {
    "release year": 2017,
    "display size": "4.7 inches",
    camera: "12 MP",
    "storage options": ["64", "256"],
    colors: ["Space Gray", "Silver", "Gold"],
  },
  "iPhone X": {
    "release year": 2017,
    "display size": "5.8 inches",
    camera: "12 MP dual",
    "storage options": ["64", "256"],
    colors: ["Space Gray", "Silver"],
  },
  "iPhone XR": {
    "release year": 2018,
    "display size": "6.1 inches",
    camera: "12 MP",
    "storage options": ["64", "128", "256"],
    colors: ["Black", "White", "Blue", "Yellow", "Coral", "Red"],
  },
  "iPhone 11": {
    "release year": 2019,
    "display size": "6.1 inches",
    camera: "12 MP dual",
    "storage options": ["64", "128", "256"],
    colors: ["Black", "Green", "Yellow", "Purple", "Red", "White"],
  },
  "iPhone 12": {
    "release year": 2020,
    "display size": "6.1 inches",
    camera: "12 MP dual",
    "storage options": ["64", "128", "256"],
    colors: ["Black", "White", "Green", "Blue", "Red"],
  },
  "iPhone 13": {
    "release year": 2021,
    "display size": "6.1 inches",
    camera: "12 MP dual",
    "storage options": ["128", "256", "512"],
    colors: ["Pink", "Blue", "Midnight", "Starlight", "Product(RED)"],
  },
};

export const Watches: DropDownItemsType = {
  "Apple Watch Series 0": {
    release_date: "September 9, 2014",
    display_size: "1.5 inches",
    water_resistance: "IPX7",
    features: ["Heart rate tracking", "Step measurement", "Digital Crown"],
    colors: ["Black", "White", "Gold"],
  },
  "Apple Watch Series 1": {
    release_date: "September 7, 2016",
    display_size: "1.5 inches",
    water_resistance: "IPX7",
    features: ["Dual-core processor", "Inbuilt GPS"],
    colors: ["Silver", "Space Gray"],
  },
  "Apple Watch Series 2": {
    release_date: "September 7, 2016",
    display_size: "1.65 inches",
    water_resistance: "WR50",
    features: ["Built-in GPS", "Brighter OLED Retina display"],
    colors: ["Silver", "Space Gray", "Rose Gold"],
  },
  "Apple Watch Series 3": {
    release_date: "September 12, 2017",
    display_size: "1.65 inches",
    water_resistance: "WR50",
    features: ["Cellular connectivity", "Altimeter", "Siri"],
    colors: ["Silver", "Space Gray", "Gold"],
  },
  "Apple Watch Series 4": {
    release_date: "September 12, 2018",
    display_size: "1.78 inches",
    water_resistance: "WR50",
    features: ["ECG app", "Fall detection", "64-bit dual-core processor"],
    colors: ["Silver", "Space Gray", "Gold", "Stainless Steel"],
  },
  "Apple Watch Series 5": {
    release_date: "September 10, 2019",
    display_size: "1.78 inches",
    water_resistance: "WR50",
    features: ["Always-on display", "Compass", "Emergency SOS"],
    colors: ["Silver", "Space Gray", "Gold", "Titanium"],
  },
  "Apple Watch SE": {
    release_date: "September 15, 2020",
    display_size: "1.78 inches",
    water_resistance: "WR50",
    features: ["Affordable price", "Retina display", "Family Setup"],
    colors: ["Silver", "Space Gray", "Gold"],
  },
  "Apple Watch Series 6": {
    release_date: "September 15, 2020",
    display_size: "1.78 inches",
    water_resistance: "WR50",
    features: ["Blood oxygen monitoring", "U1 chip", "Always-on altimeter"],
    colors: ["Silver", "Space Gray", "Blue", "Red"],
  },
  "Apple Watch Series 7": {
    release_date: "September 14, 2021",
    display_size: "1.85 inches",
    water_resistance: "WR50",
    features: ["Larger display", "Fast charging", "Durable design"],
    colors: ["Silver", "Midnight", "Starlight", "Green"],
  },
  "Apple Watch Series 8": {
    release_date: "September 7, 2022",
    display_size: "1.85 inches",
    water_resistance: "WR50",
    features: ["Advanced health sensors", "Always-on display", "Titanium case"],
    colors: ["Silver", "Graphite", "Gold", "Product(RED)"],
  },
  "Apple Watch Ultra": {
    release_date: "September 7, 2022",
    display_size: "1.85 inches",
    water_resistance: "WR100",
    features: ["Rugged design", "Underwater mode", "Extreme durability"],
    colors: ["Black", "Yellow", "Orange", "Camouflage"],
  },
  "Apple Watch Series 9": {
    release_date: "September 12, 2023",
    display_size: "1.85 inches",
    water_resistance: "WR50",
    features: [
      "Enhanced battery life",
      "Health insights",
      "Customizable bands",
    ],
    colors: ["Silver", "Blue", "Red", "White"],
  },
};

export const Airpods :DropDownItemsType = {
  "AirPods (1st Generation)": {
    release_date: "September 9, 2014",
    features: ["Wireless earbuds", "One-tap setup", "Digital Crown"],
    colors: ["Black", "White", "Gold"],
  },
  "AirPods (2nd Generation)": {
    release_date: "September 7, 2016",
    features: ["Dual-core processor", "Inbuilt GPS"],
    colors: ["Silver", "Space Gray"],
  },
  "AirPods (3rd Generation)": {
    release_date: "October 2021",
    features: ["Active Noise Cancellation", "Spatial Audio"],
    colors: ["Silver", "Space Gray", "Rose Gold"],
  },
  "AirPods Pro": {
    release_date: "October 2019",
    features: [
      "Adaptive Audio",
      "Active Noise Cancellation",
      "Transparency mode",
    ],
    colors: ["Space Gray", "Silver"],
  },
  "AirPods Max": {
    release_date: "December 2020",
    features: [
      "High-fidelity audio",
      "Active Noise Cancellation",
      "Spatial Audio",
    ],
    colors: ["Space Gray", "Silver", "Blue", "Red"],
  },
  "AirPods SE": {
    release_date: "September 2020",
    features: ["Affordable price", "Retina display", "Family Setup"],
    colors: ["Silver", "Space Gray", "Gold"],
  },
  "AirPods Ultra": {
    release_date: "September 2022",
    features: ["Rugged design", "Underwater mode", "Extreme durability"],
    colors: ["Black", "Yellow", "Orange", "Camouflage"],
  },
  "AirPods (4th Generation)": {
    release_date: "Predicted for September 2024",
    features: ["To be announced"],
    colors: ["TBD"],
  },
};

export const ColorsAndCodes = {
  Black: "#000000",
  Blue: "#043458",
  Purple: "#B8AFE6",
  Green: "#E1F8DC",
  Red: "#E23636",
  White: "#FBF7F4",
  "Space Gray": "#333333",
  Silver: "#C0C0C0",
  Gold: "#FFD700",
  "Rose Gold": "#B76E79",
  Coral: "#FF6B6B",
  Orange: "#e6ba93",
  "Dark Blue": "#14648c",
  "Light Green": "#b4d4c1",
  Brown: "#573f3c",
};
