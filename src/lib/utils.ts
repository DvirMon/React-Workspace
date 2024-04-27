import { Revenue } from "./definitions";

export const formatCurrency = (location = "en-US", currency = "USD") => {
  return (amount: number) =>
    (amount / 100).toLocaleString(location, {
      style: "currency",
      currency,
    });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = "en-US"
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export function getTypedKeys<T>(obj: T) {
  return Object.keys(obj as object) as (keyof T)[];
}

export function toTitleCase(input: string): string {
  // Regular expression to match camel case
  const camelCaseRegex = /[A-Z]?[a-z]+/g;
  // Use the regex to find all matches in the input string
  const matches = input.match(camelCaseRegex);
  // If there are no matches, return the input as is
  if (!matches) return input;

  // Capitalize the first letter of each word and join with a space
  return matches
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function deepCopyArray<T>(input: T[]): T[] {
  return input.map(item => deepCopy(item));
}

function deepCopyObject<T extends object>(input: T): T {
  const copy: Partial<T> = {};
  for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
          copy[key] = deepCopy(input[key]);
      }
  }
  return copy as T;
}

export function deepCopy<T>(input: T): T {
  if (Array.isArray(input)) {
      return deepCopyArray(input) as unknown as T;
  } else if (typeof input === 'object' && input !== null) {
      return deepCopyObject(input);
  } else {
      return input;
  }
}
