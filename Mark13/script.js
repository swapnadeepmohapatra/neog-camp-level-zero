/**
 * Pallindrome Birthday App
 * @param {HTMLElement} el HTMlelement where the app is rendered
 */
function Birthday(el) {
  const input = document.createElement("input");
  const output = document.createElement("p");
  const button = document.createElement("button");

  el.appendChild(createElements(input, output, button));
  button.addEventListener("click", clickHandler);

  /**
   * Creates the elements for the app and returns them fragment
   * @param {HTMLElement} input HTMlelement for the input
   * @param {HTMLElement} output HTMlelement for the output
   * @param {HTMLElement} button HTMlelement for the button
   * @returns {DocumentFragment}
   */
  function createElements(input, output, button) {
    const fragment = document.createDocumentFragment();

    input.type = "date";
    input.placeholder = "Enter your birthday";
    input.required = true;
    fragment.appendChild(input);

    button.innerText = "Calculate";
    fragment.appendChild(button);

    output.classList.add("output");
    fragment.appendChild(output);

    return fragment;
  }

  /**
   * Click handler for the button
   */
  function clickHandler() {
    var bdayString = input.value;

    if (bdayString !== "") {
      var date = bdayString.split("-");
      var yyyy = date[0];
      var mm = date[1];
      var dd = date[2];

      var date = {
        day: Number(dd),
        month: Number(mm),
        year: Number(yyyy),
      };

      var dateStr = getDateAsString(date);
      var list = checkPalindromeForAllDateFormats(dateStr);
      var isPalindrome = false;

      for (let i = 0; i < list.length; i++) {
        if (list[i]) {
          isPalindrome = true;
          break;
        }
      }

      if (!isPalindrome) {
        const [ctr1, nextDate] = getNextPalindromeDate(date);
        const [ctr2, prevDate] = getPreviousPalindromeDate(date);

        showOutput(
          ctr1 > ctr2
            ? `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days.`
            : `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`
        );
      } else {
        showOutput("Yay! Your birthday is palindrome!");
      }
    } else {
      showOutput("Please enter your birthday");
    }
  }

  /**
   * Returns the date as string in all the date formats
   * @param {{day: String, month: String, year: String}} date
   * @returns {String[]}
   */
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  /**
   * Checks if the date is palindrome.
   * @param {{day: String, month: String, year: String}} str Date
   * @returns {Boolean}
   */
  function isStringPalindrome(str) {
    return str === reverseString(str);
  }

  /**
   * Returns the date as string by padding the month and day with 0 if they are single digit
   * @param {{day: Number, month: Number, year: Number}} date
   * @returns {{day: String, month: String, year: String}}
   */
  function getDateAsString(date) {
    const { day, month, year } = date;

    return {
      day: day < 10 ? "0" + day : day + "",
      month: month < 10 ? "0" + month : month + "",
      year: year + "",
    };
  }

  /**
   * Returns the date as string in all the date formats - ddmmyyyy mmddyyyy yyyymmdd ddmmyy mmddyy yyddmm
   * @param {{day: String, month: String, year: String}} date
   * @returns {{day: String, month: String, year: String}[]}
   */
  function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }

  /**
   * Checks if the date is palindrome in all the date formats
   * @param {{day: String, month: String, year: String}[]} date
   * @returns {Boolean[]}
   */
  function checkPalindromeForAllDateFormats(date) {
    return getDateInAllFormats(date).map(isStringPalindrome);
  }

  /**
   * Checks if the year is leap year
   * @param {Number} year
   * @returns {Boolean}
   */
  function isLeapYear(year) {
    if (year % 400 === 0) return true;

    if (year % 100 === 0) return false;

    if (year % 4 === 0) return true;

    return false;
  }

  /**
   * Gets the next date
   * @param {{day: String, month: String, year: String}} date
   * @returns {{day: String, month: String, year: String}}
   */
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      } else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    } else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }

    if (month > 12) {
      month = 1;
      year++;
    }

    return {
      day: day,
      month: month,
      year: year,
    };
  }

  /**
   * Finds the next palindrome date for the given date
   * @param {{day: String, month: String, year: String}} date
   * @returns {{day: String, month: String, year: String}}
   */
  function getNextPalindromeDate(date) {
    var nextDate = getNextDate(date);
    var ctr = 0;

    while (1) {
      ctr++;
      var dateStr = getDateAsString(nextDate);
      var resultList = checkPalindromeForAllDateFormats(dateStr);

      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [ctr, nextDate];
        }
      }
      nextDate = getNextDate(nextDate);
    }
  }

  /**
   * Gets the previous date
   * @param {{day: String, month: String, year: String}} date
   * @returns {{day: String, month: String, year: String}}
   */
  function getPreviousDate(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day === 0) {
      month--;

      if (month === 0) {
        month = 12;
        day = 31;
        year--;
      } else if (month === 2) {
        if (isLeapYear(year)) {
          day = 29;
        } else {
          day = 28;
        }
      } else {
        day = daysInMonth[month - 1];
      }
    }

    return {
      day: day,
      month: month,
      year: year,
    };
  }

  /**
   * Finds the previous palindrome date for the given date
   * @param {{day: String, month: String, year: String}} date
   * @returns {{day: String, month: String, year: String}}
   */
  function getPreviousPalindromeDate(date) {
    var previousDate = getPreviousDate(date);
    var ctr = 0;

    while (1) {
      ctr++;
      var dateStr = getDateAsString(previousDate);
      var resultList = checkPalindromeForAllDateFormats(dateStr);

      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [ctr, previousDate];
        }
      }
      previousDate = getPreviousDate(previousDate);
    }
  }

  /**
   * Displays the output in the output element
   * @param {String} message Message to be displayed in the output element
   */
  function showOutput(message) {
    output.innerHTML = message;
  }
}

Birthday(document.getElementById("app"));
