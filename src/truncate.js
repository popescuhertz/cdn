class CuttrBreakpoints {
  constructor(selector, options = {}, breakpoints = []) {
    this.selector = selector;
    this.options = { ...defaults, ...options };
    this.breakpoints = breakpoints;
    this._init();
  }

  _init() {
    const el = document.querySelectorAll(this.selector);

    if (el.length > 0) {
      el.forEach((element) => {
        let options = { ...this.options };
        const elementBreakpoints = this.breakpoints.filter(
          (bp) => window.matchMedia(bp.query).matches
        );
        elementBreakpoints.forEach(
          (bp) => (options = { ...options, ...bp.options })
        );

        const lines = element.innerHTML.split("\n");
        const truncatedLines = lines.map((line) => {
          return this._truncate(
            line,
            options.length,
            options.ending,
            options.truncate
          );
        });

        element.innerHTML = truncatedLines.join("\n");

        new Cuttr(element, options);
      });
    }
  }

  _truncate(text, length, ending, truncate) {
    if (truncate === "lines") {
      const words = text.split(" ");
      let truncatedText = "";
      let line = "";
      let i = 0;

      while (i < words.length) {
        if (line.length + words[i].length + 1 <= length) {
          line += words[i] + " ";
        } else {
          truncatedText += line.trim() + ending + "\n";
          line = words[i] + " ";
        }

        i++;
      }

      if (line.length > 0) {
        truncatedText += line.trim() + ending + "\n";
      }

      return truncatedText.trim();
    } else {
      if (text.length <= length) {
        return text;
      } else {
        return text.substring(0, length - ending.length) + ending;
      }
    }
  }
}

const defaults = {
  licenseKey: "2E864F64-86BB4151-AD9A08AF-B0B5C5BA",
  truncate: "words",
  length: 100,
  ending: "...",
  loadedClass: "cuttr--loaded",
  title: false,
  readMore: false,
  readMoreText: "Read more",
  readLessText: "Read less",
  readMoreBtnPosition: "inside",
  readMoreBtnTag: "button",
  readMoreBtnSelectorClass: "read-more",
  readMoreBtnAdditionalClasses: "",
};

const cuttrClasses = [
  {
    selector: ".product-description.is-header",
    options: {
      lines: 2,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 20,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 30,
        },
      },
    ],
  },
  {
    selector: ".product-description.is-section",
    options: {
      length: 60,
      readMore: true,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 40,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 50,
        },
      },
    ],
  },
];

Cuttr.prototype.defaults = defaults;

const cuttrInstances = [];

for (const classObj of cuttrClasses) {
  const { selector, options, breakpoints } = classObj;
  const cuttrInstance = new CuttrBreakpoints(selector, options, breakpoints);
  cuttrInstances.push(cuttrInstance);
}

function truncateTextPerLine(text, maxLength) {
  const lines = text.split("\n");
  let truncatedText = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.length <= maxLength) {
      truncatedText += line;
    } else {
      truncatedText += line.substring(0, maxLength).trim();
    }

    if (i < lines.length - 1) {
      truncatedText += "\n";
    }
  }

  return truncatedText;
}
