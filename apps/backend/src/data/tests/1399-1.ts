import { Test } from "@quiz/types";

/**
 * Year 1399, Series 1 Tests
 * Extracted from General English PDF
 */

export const test_1399_1_1: Test = {
  id: "1399-1-1",
  year: 1399,
  series: 1,
  number: 1,
  title: "General English - Test 1",

  question: {
    text: "I omitted all the extraneous details while explaining the _________ of the matter to him.",
    blank: "gist",
    choices: [
      { id: 1, text: "breach" },
      { id: 2, text: "distinction" },
      { id: 3, text: "qualm" },
      { id: 4, text: "gist" },
    ],
    correctAnswer: 4,
  },

  vocabulary: [
    {
      word: "omit",
      forms: ["omitted"],
      persianMeaning: "حذف کردن یا از قلم انداختن",
      explanation:
        "وقتی چیزی را عمداً نمی‌گوییم یا نمی‌نویسیم، از این فعل استفاده می‌کنیم. فرم گذشته‌اش می‌شه omitted (با دو t).",
      examples: [
        {
          english: "Don't omit any important information.",
          persian: "هیچ اطلاعات مهمی را حذف نکن.",
        },
      ],
    },
    {
      word: "extraneous",
      persianMeaning: "اضافی یا نامربوط",
      explanation:
        "یعنی چیزی که واقعاً لازم نیستن و اضافه‌ان. مثلاً ممکنه استاد به شما بگه: Remove all extraneous words from your essay.",
      examples: [
        {
          english: "Remove all extraneous words from your essay.",
          persian: "تمام کلمات اضافی را از مقاله‌ات حذف کن.",
        },
      ],
    },
    {
      word: "detail",
      forms: ["details"],
      persianMeaning: "جزئیات",
      explanation:
        "این کلمه رو همه می‌شناسیم. بسته‌اش می‌شه details. ترکیب extraneous details که تو این تست داریم به سادگی می‌شه جزئیات اضافی!",
      examples: [],
    },
    {
      word: "while",
      persianMeaning: "در حالی که یا در وقتی که",
      explanation: "حرف ربطه که دو اتفاق همزمان رو به هم وصل می‌کنه.",
      examples: [
        {
          english: "While she likes coffee, I prefer tea.",
          persian: "در حالی که اون قهوه دوست داره، من چای رو ترجیح میدم.",
        },
      ],
    },
    {
      word: "explain",
      forms: ["explaining"],
      persianMeaning: "توضیح دادن",
      explanation: "فرم ing-دارش می‌شه explaining.",
      examples: [],
    },
    {
      word: "matter",
      persianMeaning: "موضوع یا قضیه",
      explanation:
        "Matter به تنهایی معنی‌های مختلفی داره ولی وقتی با the همراهه و از یه موضوع خاص صحبت می‌کنیم، معنیش می‌شه این «موضوع» یا این «قضیه».",
      examples: [],
    },
  ],

  choiceExplanations: [
    {
      choice: "breach",
      isCorrect: false,
      persianMeaning: "نقض یا شکاف",
      explanation: "این کلمه بیشتر تو قوانین و قراردادها استفاده می‌شه.",
      collocations: [
        "breach of contract (نقض قرارداد)",
        "security breach (نقض امنیت مثلاً وقتی هکر میاد داخل سیستم)",
        "breach of trust (خیانت به اعتماد)",
      ],
      examples: [
        {
          english: "He was fired for breach of company policy.",
          persian: "اون به خاطر نقض سیاست شرکت اخراج شد.",
        },
      ],
    },
    {
      choice: "distinction",
      isCorrect: false,
      persianMeaning: "تمایز یا تفاوت",
      explanation:
        "وقتی می‌خوایم بگیم بین دو چیز فرقه، از این کلمه استفاده می‌کنیم.",
      collocations: [
        "make a distinction (قائل تمایز شدن)",
        "clear distinction (تفاوت واضح)",
        "without distinction (بدون تمایز)",
      ],
      examples: [
        {
          english: "There's a clear distinction between right and wrong.",
          persian: "یه تفاوت واضح بین درست و غلط وجود داره.",
        },
      ],
    },
    {
      choice: "qualm",
      isCorrect: false,
      persianMeaning: "تردید یا نگرانی وجدانی",
      explanation:
        "این کلمه وقتی به کار می‌ره که مرجع به یه کار مردد یا نگرانیم، مخصوصاً از نظر اخلاقی.",
      collocations: ["have no qualms about (هیچ ترددی نداشتن در مورد)"],
      examples: [
        {
          english: "She had no qualms about lying to him.",
          persian: "اون هیچ ترددی در دروغ گفتن بهش نداشت.",
        },
      ],
    },
    {
      choice: "gist",
      isCorrect: true,
      persianMeaning: "خلاصه یا مغز مطلب",
      explanation: "کلمه gist به معنی خلاصه یا مغز مطلبه.",
      collocations: [
        "Get the gist (خلاصه رو بگیر)",
        "The gist of the story (خلاصه داستان)",
        "I didn't understand every word, but I got the gist (همه کلمات رو نفهمیدم، ولی کلیت مطلب رو گرفتم)",
      ],
      examples: [],
    },
  ],

  translation:
    "من تمام جزئیات اضافی را حذف کردم در حالی که خلاصه/مغز مطلب موضوع را به او توضیح می‌دادم.",

  vocabularySummary: [
    { word: "omit / omitted", meaning: "حذف کردن" },
    { word: "extraneous", meaning: "اضافی، نامربوط" },
    { word: "detail / details", meaning: "جزئیات" },
    { word: "explain / explaining", meaning: "توضیح دادن" },
    { word: "matter", meaning: "موضوع، قضیه" },
    { word: "gist", meaning: "خلاصه، مغز مطلب", isCorrectAnswer: true },
    { word: "breach", meaning: "نقض، شکاف" },
    { word: "distinction", meaning: "تمایز، تفاوت" },
    { word: "qualm", meaning: "تردید، نگرانی وجدانی" },
  ],
};

export const test_1399_1_2: Test = {
  id: "1399-1-2",
  year: 1399,
  series: 1,
  number: 2,
  title: "General English - Test 2",

  question: {
    text: "While his brother writes in an unclear and clumsy way, Sam himself is known for his _________ style of writing.",
    blank: "lucid",
    choices: [
      { id: 1, text: "lucid" },
      { id: 2, text: "verbose" },
      { id: 3, text: "dull" },
      { id: 4, text: "feasible" },
    ],
    correctAnswer: 1,
  },

  vocabulary: [
    {
      word: "while",
      persianMeaning: "در حالی که",
      explanation:
        "این حرف ربط بعضی اوقات برای نشون دادن تضاد بین دو چیز استفاده می‌شه.",
      examples: [
        {
          english: "While she likes coffee, I prefer tea.",
          persian: "در حالی که اون قهوه دوست داره، من چای رو ترجیح می‌دم.",
        },
      ],
    },
    {
      word: "unclear",
      persianMeaning: "مشخص نا یا مبهم",
      explanation:
        "این کلمه از un- (که معنی منفی میده) + clear (واضح) ساخته شده. یعنی چیزی که واضح و روشن نیست.",
      examples: [],
    },
    {
      word: "clumsy",
      persianMeaning: "دست و پا چلفتی یا ناشیانه",
      explanation:
        "وقتی یکسی کارو خوب انجام نمیده و دستو پا، دست و پاش از استفاده می‌کنیم.",
      examples: [
        {
          english: "His clumsy movements made everyone laugh.",
          persian: "حرکات دست و پای چلفتیش همه رو خندوند.",
        },
      ],
    },
    {
      word: "be known for",
      persianMeaning: "معروف بودن به خاطر چیزی یا شناخته شدن به خاطر",
      explanation: "عبارت be known for یعنی به خاطر یه چیزی معروف بودن.",
      examples: [
        {
          english: "He is known for his kindness.",
          persian: "اون به خاطر مهربونیش معروفه.",
        },
      ],
    },
    {
      word: "style",
      persianMeaning: "سبک یا شیوه",
      explanation: "Style of writing یعنی سبک نوشتن.",
      examples: [],
    },
  ],

  choiceExplanations: [
    {
      choice: "lucid",
      isCorrect: true,
      persianMeaning: "واضح و روشن",
      explanation:
        "وقتی می‌گیم یکسی نوشتنش lucid style داره، یعنی ساده، واضح و قابل فهم می‌نویسه.",
      collocations: [
        "lucid explanation (توضیح واضح و روشن)",
        "lucid writing (نوشتن شفاف و قابل فهم)",
        "His presentation was clear and lucid. (ارائه‌اش واضح و روشن بود.)",
      ],
      examples: [],
    },
    {
      choice: "verbose",
      isCorrect: false,
      persianMeaning: "پرگو یا حرف پر",
      explanation:
        "وقتی یکسی verbose writing داره، یعنی خیلی زیاد می‌نویسه و کلی کلمه اضافی استفاده می‌کنه که لازم نیست. این کلمه نمی‌تونه جواب درست باشه چون verbose خودش یه نوع ضعف تو نوشتنه، نه یه ویژگی مثبت که تضاد با unclear و clumsy بسازه.",
      collocations: [
        "verbose speech (سخنرانی طولانی)",
        "too verbose (خیلی زیاد حرف زدن)",
      ],
      examples: [
        {
          english: "His essay was too verbose and needed editing.",
          persian: "مقاله‌اش خیلی پرگو بود و نیاز به ویرایشی داشت.",
        },
      ],
    },
    {
      choice: "dull",
      isCorrect: false,
      persianMeaning: "کسل کننده یا بی حال",
      explanation:
        "یه چیزی dull یعنی چیزی که هیچ هیجان یا جذابیتی نداره. این کلمه هم نمی‌تونه جواب درست باشه چون dull یعنی کسل‌کننده، که با یه ضعفه، نه تضاد مثبت با unclear و clumsy.",
      collocations: [
        "dull movie (فیلم کسل کننده)",
        "dull color (رنگ کم رنگ و بی حال)",
        "dull writing (نوشتن خسته کننده)",
      ],
      examples: [
        {
          english: "The lecture was so dull that everyone fell asleep.",
          persian: "سخنرانی انقدر خسته کننده بود که همه خوابشون برد.",
        },
      ],
    },
    {
      choice: "feasible",
      isCorrect: false,
      persianMeaning: "پذیر امکان یا قابل اجرا",
      explanation:
        "این کلمه برای توصیف طرح‌ها و ایده‌ها به کار می‌ره، نه سبک نوشتن! این کلمه اصلاً تو متن جمله معنی نمیده چون نمی‌شه رشد رو فتح کرد!",
      collocations: [
        "feasible plan (طرح پذیر امکان)",
        "economically feasible (از نظر اقتصادی قابل اجرا)",
      ],
      examples: [
        {
          english: "The project is not feasible with our current budget.",
          persian: "این پروژه با بودجه فعلی‌مون پذیر امکان نیست.",
        },
      ],
    },
  ],

  translation:
    "در حالی که برادرش مبهم و ناشیانه می‌نویسه، خود سم به خاطر سبک واضح و روشن نوشتنش معروفه.",

  vocabularySummary: [
    { word: "while", meaning: "در حالی که" },
    { word: "unclear", meaning: "مشخص نا، مبهم" },
    { word: "clumsy", meaning: "دست و پا چلفتی، ناشیانه" },
    { word: "be known for", meaning: "معروف بودن، شناخته شدن به خاطر" },
    { word: "style", meaning: "سبک، شیوه" },
    { word: "lucid", meaning: "واضح، روشن", isCorrectAnswer: true },
    { word: "verbose", meaning: "پرگو، حرف پر" },
    { word: "dull", meaning: "کسل کننده، بی حال" },
    { word: "feasible", meaning: "پذیر امکان، قابل اجرا" },
  ],
};

export const test_1399_1_3: Test = {
  id: "1399-1-3",
  year: 1399,
  series: 1,
  number: 3,
  title: "General English - Test 3",

  question: {
    text: "Poultry farms place the eggs into incubators to _________ the growth of the embryo into chicken.",
    blank: "hasten",
    choices: [
      { id: 1, text: "conquer" },
      { id: 2, text: "hasten" },
      { id: 3, text: "outline" },
      { id: 4, text: "elude" },
    ],
    correctAnswer: 2,
  },

  vocabulary: [
    {
      word: "poultry",
      persianMeaning: "طیور یا پرندگان خانگی",
      explanation: "این کلمه شامل مرغ، بوقلمون، اردک و غاز می‌شه.",
      examples: [],
    },
    {
      word: "farm",
      persianMeaning: "مزرعه، مرغداری",
      explanation: "Poultry farm یعنی مرغداری یا مزرعه پرورش طیور.",
      examples: [],
    },
    {
      word: "place",
      persianMeaning: "قرار دادن",
      explanation: "اینجا به صورت فعل استفاده شده و به معنی قرار دادنه.",
      examples: [
        {
          english: "Place the book on the table.",
          persian: "کتاب رو روی میز بذار.",
        },
      ],
    },
    {
      word: "egg",
      forms: ["eggs"],
      persianMeaning: "تخم مرغ",
      explanation: "بسته جمعش می‌شه eggs.",
      examples: [],
    },
    {
      word: "incubator",
      persianMeaning: "دستگاه جوجه‌کشی، انکوباتور",
      explanation:
        "این یه دستگاهه که تخم‌ها رو تو شرایط گرم و مناسب نگه می‌داره تا جوجه بشن. این کلمه از فعل incubate (جوجه‌کشی کردن) میاد.",
      examples: [],
    },
    {
      word: "growth",
      persianMeaning: "رشد",
      explanation: "این کلمه از فعل grow (رشد کردن) ساخته شده.",
      examples: [],
    },
    {
      word: "embryo",
      persianMeaning: "جنین",
      explanation: "",
      examples: [],
    },
    {
      word: "into",
      persianMeaning: "به، تبدیل به",
      explanation: "حرف اضافه into اینجا به معنی تبدیل شدن به یه چیزیه.",
      examples: [],
    },
  ],

  choiceExplanations: [
    {
      choice: "conquer",
      isCorrect: false,
      persianMeaning: "فتح کردن یا غلبه کردن",
      explanation:
        "این کلمه معمولاً تو جنگ، مسابقات، یا موقع غلبه بر مشکلات استفاده می‌شه. این کلمه اصلاً تو متن جمله معنی نمیده چون نمی‌شه رشد رو فتح کرد! این کلمه برای نبرده، غلبه نه برای رشد و پرورش.",
      collocations: [
        "conquer a country (کشور رو فتح کردن)",
        "conquer fear (بر ترس غلبه کردن)",
        "conquer a challenge (بر چالش غلبه کردن)",
      ],
      examples: [
        {
          english: "Alexander the Great conquered many lands.",
          persian: "اسکندر کبیر سرزمین‌های زیادی رو فتح کرد.",
        },
      ],
    },
    {
      choice: "hasten",
      isCorrect: true,
      persianMeaning: "تسریع کردن یا سرعت بخشیدن",
      explanation:
        "وقتی می‌خوایم یه کارو سریع‌تر انجام بشه، از این فعل استفاده می‌کنیم.",
      collocations: [
        "hasten the process (فرآیند رو تسریع کردن)",
        "hasten recovery (بهبود رو سرعت بخشیدن)",
        "We need to hasten our departure. (باید حرکتمون رو سریع‌تر کنیم.)",
      ],
      examples: [],
    },
    {
      choice: "outline",
      isCorrect: false,
      persianMeaning: "خلاصه کردن یا طرح کلی دادن",
      explanation:
        "این کلمه هم جواب درست نیست چون outline یعنی خلاصه کردن یا طرح کلی دادن، که هیچ ربطی به رشد جوجه نداره.",
      collocations: [
        "outline a plan (طرح کلی یه برنامه رو دادن)",
        "outline the main points (نکات اصلی رو خلاصه کردن)",
      ],
      examples: [
        {
          english: "The teacher outlined the lesson plan for the semester.",
          persian: "معلم طرح کلی درس‌های ترم رو ارائه داد.",
        },
      ],
    },
    {
      choice: "elude",
      isCorrect: false,
      persianMeaning: "طفره رفتن یا فرار کردن از",
      explanation:
        "وقتی می‌خوایم بگیم از چیزی یا یکسی فرار کردیم یا از اون شونه خالی کردیم، از این فعل استفاده می‌کنیم. این کلمه هم اصلاً ربطی به متن جمله نداره چون نمی‌شه از رشد فرار کرد!",
      collocations: [
        "elude capture (از دستگیری فرار کردن)",
        "elude the police (از دست پلیس فرار کردن)",
        "The answer eludes me (جواب از ذهنم می‌پره/ نمی‌تونم بیارمش یاد)",
      ],
      examples: [
        {
          english: "The thief eluded the police for weeks.",
          persian: "دزد هفته‌ها از دست پلیس فرار کرد.",
        },
      ],
    },
  ],

  translation:
    "مرغداری‌ها تخم مرغ‌ها رو داخل دستگاه جوجه‌کشی قرار می‌دن تا رشد جنین به جوجه رو تسریع کنن.",

  vocabularySummary: [
    { word: "poultry", meaning: "طیور، پرندگان خانگی" },
    { word: "farm", meaning: "مزرعه، مرغداری" },
    { word: "place", meaning: "قرار دادن" },
    { word: "egg / eggs", meaning: "تخم مرغ" },
    { word: "incubator", meaning: "دستگاه جوجه‌کشی، انکوباتور" },
    { word: "growth", meaning: "رشد" },
    { word: "embryo", meaning: "جنین" },
    { word: "into", meaning: "به، تبدیل به" },
    {
      word: "hasten",
      meaning: "تسریع کردن، سرعت بخشیدن",
      isCorrectAnswer: true,
    },
    { word: "conquer", meaning: "فتح کردن، غلبه کردن" },
    { word: "outline", meaning: "خلاصه کردن، طرح کلی دادن" },
    { word: "elude", meaning: "طفره رفتن، فرار کردن از" },
  ],
};

// Export all tests
export const tests_1399_series_1 = {
  "1399-1-1": test_1399_1_1,
  "1399-1-2": test_1399_1_2,
  "1399-1-3": test_1399_1_3,
};
