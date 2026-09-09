import type { Lang } from "@/components/LangProvider";

// ————————————————————————————————————————————————————————————————
// Types
// ————————————————————————————————————————————————————————————————
export type BarRow = {
  label: string;
  sublabel?: string;
  pct: number;
  count: string;
  muted?: boolean;
};

export type AnswerCard = {
  id: string;
  device: string;
  quote: string;
  impact?: string;
  frequency?: string;
};

export type ThemeGroup = {
  title: string;
  count: string;
  answers: AnswerCard[];
};

export type BarQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  bars: BarRow[];
  reading: string;
  zebra?: boolean;
};

export type RatingQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  avg: string;
  avgCap: string;
  counts: number[]; // 5 counts for scores 1..5
  reading: string;
  zebra?: boolean;
};

export type ThemeQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  themes: ThemeGroup[];
  reading: string;
  zebra?: boolean;
};

export type SummaryQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  summaryKicker: string;
  summaryLine: string;
  answers: AnswerCard[];
  zebra?: boolean;
};

export type HighlightItem = { html: string; tally: string };

export type Content = {
  docTitle: string;
  docDescription: string;
  brand: { name: string; role: string; period: string };
  toc: {
    overviewSection: string;
    overviewItem: string;
    summarySection: string;
    summaryItem: string;
    detailsSection: string;
    questions: { num: string; label: string }[];
    closingSection: string;
    closingItem: string;
    olderSection: string;
    olderLink: string;
  };
  hero: {
    kickerName: string;
    kickerSep: string;
    kickerLabel: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2Suffix: string;
    sub: string;
    metaPeriodK: string;
    metaPeriodV: string;
    metaResponsesK: string;
    metaResponsesV: string;
    metaTrainersK: string;
    metaTrainersV: string;
    metaDaysK: string;
    metaDaysV: string;
    days: { day: string; num: string; unit: string; label: string }[];
  };
  panorama: {
    kicker: string;
    metrics: { num: string; unit: string; label: string }[];
  };
  q1: BarQuestion;
  q2: BarQuestion;
  q3: ThemeQuestion;
  q4: BarQuestion;
  q5: BarQuestion;
  q6: RatingQuestion;
  q7: RatingQuestion;
  q8: SummaryQuestion;
  highlights: {
    num: string;
    col: string;
    title: string;
    meta: string;
    positiveTitle: string;
    positive: HighlightItem[];
    negativeTitle: string;
    negative: HighlightItem[];
  };
  closing: {
    kickerName: string;
    kickerSep: string;
    kickerLabel: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2Suffix: string;
    body: string;
  };
};

// ————————————————————————————————————————————————————————————————
// English
// ————————————————————————————————————————————————————————————————
const en: Content = {
  docTitle: "Trainers Report — Invent Money",
  docDescription:
    "Longitudinal bug report from professional trainers, September 04–07, 2026.",
  brand: {
    name: "Invent Money",
    role: "Professional trainers program",
    period: "Trainer report\n09/04–09/07/2026",
  },
  toc: {
    overviewSection: "Overview",
    overviewItem: "Key indicators",
    summarySection: "Summary",
    summaryItem: "Highlights",
    detailsSection: "Details",
    questions: [
      { num: "01", label: "Device" },
      { num: "02", label: "Bug screen" },
      { num: "03", label: "Bug description" },
      { num: "04", label: "Work impact" },
      { num: "05", label: "Frequency" },
      { num: "06", label: "Fluidity (1–5)" },
      { num: "07", label: "Recommendation (1–5)" },
      { num: "08", label: "Open suggestions" },
    ],
    closingSection: "Closing",
    closingItem: "Overall reading",
    olderSection: "Previous reports",
    olderLink: "Initial pilot",
  },
  hero: {
    kickerName: "Invent Money",
    kickerSep: "—",
    kickerLabel: "Professional trainers program",
    titleLine1: "Trainers report",
    titleAccent: "September 04 to 07",
    titleLine2Suffix: ", 2026.",
    sub: "Results from the feedback form filled out by the professional trainers hired by NIDO to analyze the Invent Money app and validate errors over four consecutive days of recording, from Friday 09/04 to Monday 09/07. Nine responses were collected from three different trainers, all with authorization to share with the product and engineering teams. The sample is small and longitudinal, so the reading is qualitative — number by number.",
    metaPeriodK: "Collection period",
    metaPeriodV: "09/04–09/07/2026",
    metaResponsesK: "Responses",
    metaResponsesV: "9",
    metaTrainersK: "Trainers",
    metaTrainersV: "3",
    metaDaysK: "Days covered",
    metaDaysV: "4",
    days: [
      { day: "Fri. 09/04", num: "2", unit: "responses", label: "Day 1, report start" },
      { day: "Sat. 09/05", num: "2", unit: "responses", label: "Day 2" },
      { day: "Sun. 09/06", num: "2", unit: "responses", label: "Day 3" },
      { day: "Mon. 09/07", num: "3", unit: "responses", label: "Day 4, last day" },
    ],
  },
  panorama: {
    kicker: "Key indicators",
    metrics: [
      { num: "2.6", unit: "/5", label: "Average fluidity of the app experience." },
      { num: "1.1", unit: "/5", label: "Would recommend Invent Money as it is today." },
      { num: "100", unit: "%", label: "Reported a recurring bug — none was a one-off incident." },
      { num: "3", unit: "trainers", label: "Hired by NIDO, covering Android and iOS across the 4 days." },
    ],
  },
  q1: {
    num: "01",
    col: "Column D",
    title: "Which phone are you using?",
    metaType: "Short open answer",
    metaResponses: "9 of 9 responses",
    bars: [
      { label: "Samsung Galaxy S25 FE", sublabel: "Android", pct: 44.44, count: "44% · 4 of 9" },
      { label: "iPhone 14 Plus", sublabel: "iOS", pct: 44.44, count: "44% · 4 of 9" },
      { label: "iPhone 12", sublabel: "iOS", pct: 11.11, count: "11% · 1 of 9", muted: true },
    ],
    reading:
      "The base was balanced between Android and iOS, with 4 responses from Android (S25 FE) and 5 from iOS (14 Plus and 12). The differences between platforms show up strongly in the reports: VPN, upload and screen orientation behave differently between iPhone and Samsung.",
  },
  q2: {
    num: "02",
    col: "Column E",
    title: "On which screen or moment did the bug happen?",
    metaType: "Short open answer",
    metaResponses: "9 of 9 responses",
    zebra: true,
    bars: [
      { label: "Video upload", pct: 44.44, count: "44% · 4 of 9" },
      { label: "Video approval / status", pct: 33.33, count: "33% · 3 of 9" },
      { label: "Video recording", pct: 22.22, count: "22% · 2 of 9" },
    ],
    reading:
      "The entire video flow shows problems, but upload concentrates most of the reports (4 of 9). Approval comes second, and recording third. The three critical stages of the app were cited in at least one report.",
  },
  q3: {
    num: "03",
    col: "Column F",
    title: "Describe the bug with as much detail as possible.",
    metaType: "Long open answer",
    metaResponses: "9 of 9 responses",
    themes: [
      {
        title: "Video upload",
        count: "4 reports",
        answers: [
          {
            id: "Resp. B · day 04",
            device: "iPhone 14 Plus",
            quote:
              "I recorded 15 minutes washing the sidewalk and when saving, the page closed. I recorded about 30 minutes vacuuming the house, and when I took the phone off my forehead and held it, the screen orientation flipped, the page refreshed, and I lost the whole recording without being able to save. Also, the app/site keeps detecting VPN use, locking the screen and blocking recording even without a VPN on my phone. This happened on every browser I tested on the iPhone. Recording directly in the app is impossible — it only works recording with the phone camera and then uploading, and it takes forever to load to the site too. If the screen locks, you have to restart the upload, which is terrible.",
            impact: "Completely blocked",
            frequency: "Every time",
          },
          {
            id: "Resp. A · day 06",
            device: "Samsung S25 FE",
            quote:
              "On the third day of tests, I did the recordings using the phone's camera and later uploaded the videos through the Invent Money site. The videos were recorded following the configuration/orientation requested by the task. I didn't identify new bugs or problems beyond the slow loading of videos, already observed previously. The upload continues to be significantly more delayed compared to videos recorded directly through the app.",
            impact: "Didn't block me",
            frequency: "Every time",
          },
          {
            id: "Resp. B · day 06",
            device: "iPhone 14 Plus",
            quote:
              "I filmed 4 minutes and 40 seconds watering the plants and when uploading it wasn't accepted because it didn't hit the 5-minute minimum. Many tasks take less than 5 minutes — making the bed for example is one of them. I lost that recording time. Another recording was organizing the kitchen and I took an Amazon package off the table and put it in the trash — the video was rejected because it said the address was visible. I even put my hand in front to hide it and turned the bag inside out, but they still rejected it. I reiterate the opinion that it's too demanding.",
            impact: "Didn't block me",
            frequency: "Sometimes",
          },
          {
            id: "Resp. C · day 07",
            device: "iPhone 12",
            quote:
              "Uploading from iPhone requires loading twice — once to select the video from the gallery and a second time to load into Invent. This is really annoying because it takes a long time. On Android I tested sending from the Samsung S21 and there's no such \"extra step\" of loading. Also, I couldn't send bigger videos from the iPhone, because in this first loading step there was an error with no explanation — it just went back to the upload screen. I managed to send by uploading the videos to Google Drive, downloading on the computer and sending via site, which is another experience problem — I shouldn't have to download again on the computer if the desktop upload button had a \"pick a file from Drive\" option, like the phone does.",
            impact: "Worked around it",
            frequency: "Sometimes",
          },
        ],
      },
      {
        title: "Video approval / status",
        count: "3 reports",
        answers: [
          {
            id: "Resp. A · day 05",
            device: "Samsung S25 FE",
            quote:
              "Feedback day 5 (Saturday) — I had a video rejected under the claim that the content didn't match the task.\n\nHowever, as clearly stated in the task description itself, sanding a piece of wood to later paint it was allowed. That was exactly the guidance I followed in producing the video.\n\nI'm sending prints of the task description to show that the content was in line with what was requested. Because of that, I believe this rejection may have happened due to an evaluation error or a bug in the system.",
            impact: "Didn't block me",
            frequency: "Sometimes",
          },
          {
            id: "Resp. B · day 05",
            device: "iPhone 14 Plus",
            quote:
              "I recorded with the phone and sent it. It wasn't approved because I walked in front of the mirror while cleaning the furniture and I could be seen. Another one I recorded and wasn't approved was mopping the floor. It's impossible to keep both hands in frame all the time, precisely because of the movements we make while cleaning. The evaluation is extremely demanding, it discourages recording. You have to consider the naturalness of a human body's movements — we're not robots, we're just training some. The VPN problem persists.",
            impact: "Didn't block me",
            frequency: "Sometimes",
          },
          {
            id: "Resp. B · day 07",
            device: "iPhone 14 Plus",
            quote:
              "Everything I sent on Monday was rejected. I have to keep cropping the videos to see if they'll approve, given the level of demand. All the videos are recorded the same way, and still one video was rejected for pointing out that I didn't record horizontally. There's simply no way to record vertically — the phone would rest in the middle of my face blocking the view and with a totally wrong angle.",
            impact: "Didn't block me",
            frequency: "Sometimes",
          },
        ],
      },
      {
        title: "Video recording",
        count: "2 reports",
        answers: [
          {
            id: "Resp. A · day 04",
            device: "Samsung Galaxy S25 FE",
            quote:
              "When recording directly in the app, with the phone in horizontal position, the system did not correctly recognize the video orientation. Even doing the recording that way, the video was not identified/presented as horizontal and ended up being rejected. Two videos were rejected, though both were recorded following the same procedure. The expectation was that the app would automatically recognize the horizontal recording orientation and allow sending normally.",
            impact: "Didn't block me",
            frequency: "Every time",
          },
          {
            id: "Resp. A · day 07",
            device: "Samsung galaxy S25 FE",
            quote:
              "Today, on the last day of tests, I chose to record directly through the Invent Money site. In this environment, the screen orientation was correctly recognized and the video was in horizontal format. The orientation recognition problem reported earlier happened during recordings done via the Android app, not via the site.\nDuring the site test, I identified another usability point related to POV recording. Since the phone stays attached to a head mount during the activity, there's no practical way to stop the recording without taking the device off the mount. You need to take the phone off the head to access the stop command. It would be interesting to make a more practical way to end the recording in this kind of situation. But overall, recording via the site was much easier, including for saving.",
            impact: "Didn't block me",
            frequency: "Every time",
          },
        ],
      },
    ],
    reading:
      "Three problem fronts stand out with their own weight: upload (slow and unstable, with iPhone-specific failures), approval (perceived as strict and sometimes inconsistent with the task description) and recording (screen orientation on Android). Resp. A reports that recording via the site solves the orientation, which points to a clear workaround path.",
  },
  q4: {
    num: "04",
    col: "Column G",
    title: "Did the bug block your work, or could you continue?",
    metaType: "Multiple choice",
    metaResponses: "9 of 9 responses",
    zebra: true,
    bars: [
      { label: "It happened, but didn't stop me from recording/sending", pct: 77.78, count: "78% · 7 of 9" },
      { label: "It got in the way, but I worked around it", pct: 11.11, count: "11% · 1 of 9", muted: true },
      { label: "It completely blocked me, couldn't continue", pct: 11.11, count: "11% · 1 of 9", muted: true },
    ],
    reading:
      "In most reports, the bugs are annoying without blocking. Still, there was one case of complete block (Resp. B, day 04, iPhone) where the recording was lost, and another where the trainer had to resort to an alternative path via Google Drive to send.",
  },
  q5: {
    num: "05",
    col: "Column H",
    title: "Did the bug happen more than once?",
    metaType: "Multiple choice",
    metaResponses: "9 of 9 responses",
    bars: [
      { label: "It happened sometimes", pct: 55.56, count: "56% · 5 of 9" },
      { label: "Yes, happens every time", pct: 44.44, count: "44% · 4 of 9" },
      { label: "It was just once", pct: 0, count: "0% · 0 of 9" },
    ],
    reading:
      "No report was a one-off incident. All 9 bugs are recurring, and in 4 cases the problem reproduces every time. This is the harshest signal in the response set: the product has systemic failures, not point ones.",
  },
  q6: {
    num: "06",
    col: "Column J",
    title: "From 1 to 5, how fluid was your overall experience in the app?",
    metaType: "1–5 numeric scale",
    metaResponses: "9 of 9 responses",
    zebra: true,
    avg: "2.6",
    avgCap: "Average of 9 responses",
    counts: [4, 0, 1, 4, 0],
    reading:
      "The distribution is bimodal, with two equal peaks at 1 and at 4, and no top score of 5. The 4s are all from Android/Samsung, and the 1s are all from iPhone. Fluidity is perceived very differently between the two platforms.",
  },
  q7: {
    num: "07",
    col: "Column K",
    title: "From 1 to 5, how much would you recommend Invent Money as it is today?",
    metaType: "1–5 numeric scale",
    metaResponses: "9 of 9 responses",
    avg: "1.1",
    avgCap: "Average of 9 responses",
    counts: [8, 1, 0, 0, 0],
    reading:
      "Recommendation is almost unanimous at the lowest value: 8 responses at 1 and just one at 2. Even those who gave a 4 on fluidity wouldn't recommend today. The barrier to recommending the product isn't just technical — it also involves approval criteria and the perceived cost-benefit of the time invested.",
  },
  q8: {
    num: "08",
    col: "Column L",
    title: "Suggestions, praise or criticism for the Invent Money operation",
    metaType: "Long open answer",
    metaResponses: "9 of 9 responses",
    summaryKicker: "One-line summary",
    summaryLine:
      "Occasional praise for recording and navigation coexists with strong criticism of the approval criteria, of upload on iPhone, and of screen orientation on Android.",
    answers: [
      {
        id: "Resp. A · day 04",
        device: "Friday · Samsung",
        quote:
          "Feedback — 1st day of testing | Android\nPositive points:\nRecording directly in the app works quite practically and the video loading is significantly faster than uploading a video already recorded on the phone. I found the sending process via the app itself much more agile.\nNegative points / identified bugs:\nVideo orientation recognition: I recorded the videos in horizontal using the app itself, but the platform didn't correctly recognize the orientation. As a consequence, two videos were rejected, even though they were recorded the same way. It would be important to check the recognition/orientation of videos recorded horizontally.\nRecording screen too small: during recording, the view is small, making it hard to follow what's being recorded and check if the framing is correct. A fullscreen option or larger preview would help a lot.\nSound signal during recording: after a few minutes of recording, I noticed a sound signal, apparently near five minutes. The sound left me unsure about the recording status, since it wasn't clear if it was just a warning or if some action should be taken. It would be interesting to have a more evident visual indicator, like \"RECORDING\" + time counter, to make clear the recording is still active.\nI attached photos and videos as proof of the problem, showing that automatic phone rotation was activated and also how the video was recorded and sent to the platform. The evidence was included to demonstrate the procedure was performed correctly — even so the system didn't recognize the horizontal orientation of the videos and they were rejected.\nI gave a 4 because, overall, the app's navigation and fluidity are good. My main difficulty is related to recording and sending the videos, especially with screen orientation and upload.",
      },
      {
        id: "Resp. B · day 04",
        device: "Friday · iPhone 14 Plus",
        quote:
          "I uploaded the print of the screen with VPN, and the photos of the environment after doing the task and the recording disappearing just because the screen orientation changed. The app has very rigid functionality — the ideal would be to have the app on the Apple Store and when starting the recording, it would open a fullscreen just for the camera, like Hub does.",
      },
      {
        id: "Resp. A · day 05",
        device: "Saturday · Samsung",
        quote:
          "Day 5 — Saturday\n\nToday I continued doing the Invent Money test tasks on the Android phone.\n\nDuring the day, I recorded some videos using the option of recording videos outside the app, to then send them within the task. However, I noticed that videos recorded this way take a long time to upload/load in the app, which makes the process slower and hinders task completion.\n\nI also had a problem related to the evaluation of one of the videos. The video was rejected with the justification that the content didn't match the task. However, the task description itself clearly stated it was possible to sand a piece of wood to later paint it. The video content followed exactly that guidance. I sent the prints of the description to demonstrate that the video was in line with what had been requested.\n\nSo, besides the delay in sending the videos recorded outside the app, there's also this possible problem in evaluating/rejecting content that followed the instructions presented in the task.",
      },
      {
        id: "Resp. B · day 05",
        device: "Saturday · iPhone 14 Plus",
        quote:
          "I even have a group of trainers who are close to me and I help and teach them, but I don't recommend Invent Money because of how it is today — too demanding, takes forever to approve videos and the system is very laggy which unfortunately hinders more than helps us. When we think about the hours we could have recorded for other companies and would be paid, we prefer to record for them, since Invent has been rejecting a lot of material over silly things.",
      },
      {
        id: "Resp. A · day 06",
        device: "Sunday · Samsung",
        quote:
          "The overall experience remains positive, with simple and easy-to-understand navigation. As a suggestion for improvement, it would be interesting to optimize the upload time for videos recorded with the phone camera, since loading is quite slow. On day three I didn't identify new bugs beyond this question already observed previously.\nSince I didn't identify any bug that hadn't already been reported, I have no new images to send.",
      },
      {
        id: "Resp. B · day 06",
        device: "Sunday · iPhone 14 Plus",
        quote: "Decrease the minimum time, fix the screen orientation bugs (very silly error for such a big tech company not to fix).",
      },
      {
        id: "Resp. A · day 07",
        device: "Monday · Samsung",
        quote:
          "The overall experience was positive, with good fluidity and simple navigation. In today's test through the site, the horizontal video orientation was recognized correctly. As a suggestion for improvement, it would be important to make it easier to stop the recording, especially for POV recordings where the phone is attached to a head mount and you have to take it off to access the stop command. It would also be interesting to keep the upload time optimization for videos.",
      },
      {
        id: "Resp. C · day 07",
        device: "Monday · iPhone 12",
        quote:
          "I think it's really cool to be able to record straight from the camera, but the upload experience to Invent is exhausting. Also, the reviews are debatable — there will be frames where the hands aren't 100% visible, that's human, there will be videos where the task might slightly deviate from what's planned, and it happens. Previously, I was cleaning a piece of furniture and my video was denied because portraits of people appeared, I don't find that fair — plus another that was denied because, according to support, it wasn't recorded in a company environment, when I was actually recording preparing food for my mother's company, but we were in the home kitchen, though it was for her store. I believe the variation of tasks could also be greater, since we can't wash dishes, fold clothes and so on, which is bad for diversity and limiting. There's also a per-category send limit, I hit the 15-send limit — but what if I wanted to send more? I think the platform is good and can improve even more, also integrating other forms of payment, like Brazil's Pix.",
      },
      {
        id: "Resp. B · day 07",
        device: "Monday · iPhone 14 Plus",
        quote: "Fix the screen orientation bugs.",
      },
    ],
  },
  highlights: {
    num: "→",
    col: "Synthesis",
    title: "Strong points and main improvements",
    meta: "Extracted from open answers (F and L) across the 4 days",
    positiveTitle: "Strong points",
    positive: [
      {
        html:
          "<strong>Recording directly in the app or via the site</strong> was praised as practical and with faster loading than uploading a pre-recorded video.",
        tally: "3 reports",
      },
      {
        html:
          "<strong>Simple navigation and good fluidity</strong> appear repeatedly in Android responses.",
        tally: "3 reports",
      },
      {
        html:
          "<strong>Recording via the site solves the screen orientation.</strong> Resp. A confirms on day 07 that the site recognizes the horizontal video, unlike the Android app.",
        tally: "1 report · workaround",
      },
      {
        html:
          "<strong>Being able to record straight from the camera</strong> is highlighted as a differentiator by Resp. C.",
        tally: "1 report",
      },
    ],
    negativeTitle: "Most cited improvements",
    negative: [
      {
        html:
          "<strong>Approval criteria perceived as rigid or inconsistent.</strong> Videos were rejected for mirrors in the background, address on a package, portraits on the wall, home environment, screen orientation or for not aligning with the task description.",
        tally: "5 reports",
      },
      {
        html:
          "<strong>Screen orientation (horizontal and vertical)</strong> isn't recognized correctly on the Android app and leads to rejection of videos recorded horizontally.",
        tally: "4 reports",
      },
      {
        html:
          "<strong>Slow or unstable upload.</strong> Loading is slow on Android, and on iPhone it requires two steps and fails on larger videos without a clear error.",
        tally: "4 reports",
      },
      {
        html:
          "<strong>False VPN alert on iPhone.</strong> The screen locks and blocks recording even without an active VPN on the device.",
        tally: "2 reports",
      },
      {
        html:
          "<strong>5-minute minimum per video</strong> doesn't fit short tasks like watering plants or making the bed.",
        tally: "1 report",
      },
      {
        html:
          "<strong>No practical way to stop POV recording.</strong> You have to take the phone off the head mount.",
        tally: "1 report",
      },
      {
        html:
          "<strong>Recording screen too small</strong> and without a clear \"RECORDING\" indicator with time counter.",
        tally: "1 report",
      },
      {
        html:
          "<strong>App missing from the App Store.</strong> On iPhone the product only works via the browser.",
        tally: "1 report",
      },
      {
        html:
          "<strong>15-send limit per category</strong> and restricted task variety mentioned as limiting.",
        tally: "1 report",
      },
      {
        html:
          "<strong>Lack of Pix as a payment method</strong> cited as an opportunity.",
        tally: "1 report",
      },
    ],
  },
  closing: {
    kickerName: "Closing",
    kickerSep: "—",
    kickerLabel: "General reading of the 9 responses across 4 days",
    titleLine1: "The base works.",
    titleAccent: "need adjustment",
    titleLine2Suffix: ".",
    body:
      "In four days of reporting, three professional trainers recorded nine bugs. None of them isolated, and all concentrated on the product's central flow: recording, uploading and video approval. Perceived fluidity clearly splits between Android (score 4) and iPhone (score 1), and today's recommendation is almost unanimous at the lowest score — with 8 responses at 1 and only one at 2. The improvements pointed out are specific and possible to resolve: a more human approval criterion, fixing screen orientation on Android, adjusting the upload on iPhone and the false VPN alert. It's a small sample, but with dense, longitudinal and consistent reports across respondents — and a good starting point to prioritize fixes before the next validation cycle.",
  },
};

// ————————————————————————————————————————————————————————————————
// Portuguese (original)
// ————————————————————————————————————————————————————————————————
const pt: Content = {
  docTitle: "Report dos Trainers — Invent Money",
  docDescription:
    "Report longitudinal de bugs de trainers profissionais, 04–07 de setembro de 2026.",
  brand: {
    name: "Invent Money",
    role: "Trainers pro",
    period: "Report de trainers\n04-07/09/2026",
  },
  toc: {
    overviewSection: "Panorama",
    overviewItem: "Indicadores-chave",
    summarySection: "Resumo",
    summaryItem: "Destaques",
    detailsSection: "Detalhes",
    questions: [
      { num: "01", label: "Aparelho" },
      { num: "02", label: "Tela do bug" },
      { num: "03", label: "Descrição do bug" },
      { num: "04", label: "Impacto no trabalho" },
      { num: "05", label: "Frequência" },
      { num: "06", label: "Fluidez (1-5)" },
      { num: "07", label: "Recomendação (1-5)" },
      { num: "08", label: "Sugestões abertas" },
    ],
    closingSection: "Fechamento",
    closingItem: "Leitura geral",
    olderSection: "Reports anteriores",
    olderLink: "Piloto inicial",
  },
  hero: {
    kickerName: "Invent Money",
    kickerSep: "—",
    kickerLabel: "Programa de Trainers Profissionais",
    titleLine1: "Report dos trainers",
    titleAccent: "04 a 07 de setembro",
    titleLine2Suffix: " de 2026.",
    sub: "Resultados do formulário de feedback preenchido pelas trainers profissionais contratadas pela NIDO para analisar o app da Invent Money e validar erros ao longo de quatro dias seguidos de gravação, de sexta-feira 04/09 até segunda-feira 07/09. Foram nove respostas de três trainers diferentes, todas com autorização para compartilhamento com as equipes de produto e desenvolvimento. A amostra é pequena e longitudinal, então a leitura é qualitativa, feita número por número.",
    metaPeriodK: "Período de coleta",
    metaPeriodV: "04-07/09/2026",
    metaResponsesK: "Respostas",
    metaResponsesV: "9",
    metaTrainersK: "Trainers",
    metaTrainersV: "3",
    metaDaysK: "Dias cobertos",
    metaDaysV: "4",
    days: [
      { day: "Sex. 04/09", num: "2", unit: "respostas", label: "Dia 1, início do report" },
      { day: "Sáb. 05/09", num: "2", unit: "respostas", label: "Dia 2" },
      { day: "Dom. 06/09", num: "2", unit: "respostas", label: "Dia 3" },
      { day: "Seg. 07/09", num: "3", unit: "respostas", label: "Dia 4, último dia" },
    ],
  },
  panorama: {
    kicker: "Indicadores-chave",
    metrics: [
      { num: "2,6", unit: "/5", label: "Fluidez média da experiência no app." },
      { num: "1,1", unit: "/5", label: "Recomendariam a Invent Money hoje." },
      { num: "100", unit: "%", label: "Relataram bug recorrente, nenhum foi incidente único." },
      { num: "3", unit: "trainers", label: "Contratadas pela NIDO, cobrindo Android e iOS ao longo dos 4 dias." },
    ],
  },
  q1: {
    num: "01",
    col: "Coluna D",
    title: "Qual celular você está usando?",
    metaType: "Resposta aberta curta",
    metaResponses: "9 de 9 respostas",
    bars: [
      { label: "Samsung Galaxy S25 FE", sublabel: "Android", pct: 44.44, count: "44% · 4 de 9" },
      { label: "iPhone 14 Plus", sublabel: "iOS", pct: 44.44, count: "44% · 4 de 9" },
      { label: "iPhone 12", sublabel: "iOS", pct: 11.11, count: "11% · 1 de 9", muted: true },
    ],
    reading:
      "A base ficou equilibrada entre Android e iOS, com 4 respostas de Android (S25 FE) e 5 de iOS (14 Plus e 12). As diferenças entre as plataformas aparecem com força nos relatos: VPN, upload e orientação de tela têm comportamentos distintos entre iPhone e Samsung.",
  },
  q2: {
    num: "02",
    col: "Coluna E",
    title: "Em qual tela ou momento o bug aconteceu?",
    metaType: "Resposta aberta curta",
    metaResponses: "9 de 9 respostas",
    zebra: true,
    bars: [
      { label: "Upload do vídeo", pct: 44.44, count: "44% · 4 de 9" },
      { label: "Aprovação / status dos vídeos", pct: 33.33, count: "33% · 3 de 9" },
      { label: "Gravação do vídeo", pct: 22.22, count: "22% · 2 de 9" },
    ],
    reading:
      "Todo o fluxo de vídeo aparece com problema, mas o upload concentra a maior parte dos relatos (4 de 9). A aprovação vem em segundo lugar, e a gravação em terceiro. As três etapas críticas do app foram citadas em pelo menos um relato.",
  },
  q3: {
    num: "03",
    col: "Coluna F",
    title: "Descreva o bug com o máximo de detalhes possível.",
    metaType: "Resposta aberta longa",
    metaResponses: "9 de 9 respostas",
    themes: [
      {
        title: "Upload do vídeo",
        count: "4 relatos",
        answers: [
          {
            id: "Resp. B · dia 04",
            device: "iPhone 14 Plus",
            quote:
              "Gravei 15 minutos lavando a calçada e na hora de salvar, a página fechou. Gravei cerca de 30 minutos aspirando a casa, quando tirei o celular da testa, e segurei, a orientação da tela virou, atualizou a pagina e eu perdi toda a gravação sem conseguir salvar. Além disso, o app/site fica identificando uso de VPN, travando a tela e bloqueando a gravação mesmo sem ter VPN no celular. Isso aconteceu em todos os navegadores que testei no iPhone. A gravação direto pelo app é impossível, só funciona gravando pela câmera do celular e subindo e demora demais pra carregar para o site também. Se a tela bloquear, tem que reiniciar o carregamento, isso é péssimo.",
            impact: "Travou completamente",
            frequency: "Toda vez",
          },
          {
            id: "Resp. A · dia 06",
            device: "Samsung S25 FE",
            quote:
              "No terceiro dia de testes, realizei as gravações utilizando a câmera do celular e posteriormente fiz o upload dos vídeos pelo site da Invent Money. Os vídeos foram gravados de acordo com a configuração/orientação solicitada pela tarefa. Não identifiquei novos bugs ou problemas além da lentidão no carregamento dos vídeos, já observada anteriormente. O upload continua sendo significativamente mais demorado quando comparado aos vídeos gravados diretamente pelo aplicativo.",
            impact: "Não me impediu",
            frequency: "Toda vez",
          },
          {
            id: "Resp. B · dia 06",
            device: "iPhone 14 Plus",
            quote:
              "filmei 4minutos e 40 segundos aguando as plantas e na hora de subir não foi aceito porque não atingiu o tempo mínimo de 5 minutos. Muitas tarefas são feitas em menos de 5 minutos, arrumar a cama por exemplo é uma delas. Perdi esse tempo de gravação. Outra gravação foi organizando a cozinha e tirei um pacote da amazon de cima da mesa e coloquei no lixo e o vídeo foi recusado porque disse que dá pra ver o endereço. Eu aindaa coloquei a mão na frente escondendo e virei o saco do avesso, mas mesmo assim recusaram. Reintero a opinião de exigência demais.",
            impact: "Não me impediu",
            frequency: "Às vezes",
          },
          {
            id: "Resp. C · dia 07",
            device: "iPhone 12",
            quote:
              "Upload pelo iPhone requer o carregamento duas vezes, uma ao selecionar na galeria o vídeo e a segunda para carregar na invent. Isso atrapalha muito pois demora a carregar, no android eu testei enviando pelo Samsung S21 e não tem essa \"etapa extra\" de carregamento. Além disso, vídeos maiores não consegui mandar pelo iPhone, porque nessa primeira etapa de carregamento dava um erro sem explicar o motivo, só voltava pra tela pra uploadar novamente. Consegui enviar carregando os vídeos no google drive, baixando no computador e enviando pelo site, vejo aí outro problema de experiência, eu não precisava baixar de novo no computador se o botão de upload do desktop sugerisse escolher um arquivo do drive, assim como tem essa opção no celular.",
            impact: "Deu um jeito",
            frequency: "Às vezes",
          },
        ],
      },
      {
        title: "Aprovação / status dos vídeos",
        count: "3 relatos",
        answers: [
          {
            id: "Resp. A · dia 05",
            device: "Samsung S25 FE",
            quote:
              "Feedback dia 5 (sábado), tive um vídeo reprovado sob a alegação de que o conteúdo não condizia com a tarefa.\n\nPorém, conforme consta claramente na própria descrição da tarefa, era permitido lixar uma peça de madeira para posteriormente pintá-la. Foi exatamente essa orientação que segui na produção do vídeo.\n\nEstou enviando os prints da descrição da tarefa para demonstrar que o conteúdo estava de acordo com o que foi solicitado. Por isso, acredito que essa reprovação possa ter ocorrido por um erro de avaliação ou algum bug no sistema.",
            impact: "Não me impediu",
            frequency: "Às vezes",
          },
          {
            id: "Resp. B · dia 05",
            device: "iPhone 14 Plus",
            quote:
              "Gravei pelo celular, e enviei. Não foi aprovado porque passei na frente do espelho enquanto limpava os móveis e foi possível me ver. Outro que gravei e não foi aprovado foi passando pano no chão. É impossível manter as duas mãos o tempo todo no quadro, justamente pelos movimentos que fazemos enquanto limpamos. A avaliação está extremamente exigente, desanima a gente de gravar. Tem que considerar a naturalidade dos movimentos de um corpo humano, não somos robôs, apenas estamos treinando uns. O problema de VPN persiste.",
            impact: "Não me impediu",
            frequency: "Às vezes",
          },
          {
            id: "Resp. B · dia 07",
            device: "iPhone 14 Plus",
            quote:
              "Tudo o que eu enviei na segunda foi recusado. Eu preciso ficar cortando os vídeos para ver se aprovam por conta do nível de exigência. Todos os vídeos são gravados da mesma maneira, e ainda assim um vídeo foi recusado por apontar que não gravei na horizontal. Simplesmente nem tem como gravar na vertical, o Cellular ficaria apoiado no meio do rosto tampando a visão e com o angulo totalmente errado.",
            impact: "Não me impediu",
            frequency: "Às vezes",
          },
        ],
      },
      {
        title: "Gravação do vídeo",
        count: "2 relatos",
        answers: [
          {
            id: "Resp. A · dia 04",
            device: "Samsung Galaxy S25 FE",
            quote:
              "Ao realizar a gravação diretamente pelo aplicativo, com o celular na posição horizontal, o sistema não reconheceu corretamente a orientação do vídeo. Mesmo realizando a gravação dessa forma, o vídeo não foi identificado/apresentado corretamente como horizontal e acabou sendo rejeitado. Foram dois vídeos rejeitados, embora ambos tenham sido gravados seguindo o mesmo procedimento. O esperado era que o aplicativo reconhecesse automaticamente a orientação horizontal da gravação e permitisse o envio normalmente.",
            impact: "Não me impediu",
            frequency: "Toda vez",
          },
          {
            id: "Resp. A · dia 07",
            device: "Samsung galaxy S25 FE",
            quote:
              "Hoje, no último dia de testes, optei por realizar a gravação diretamente pelo site da Invent Money. Nesse ambiente, a orientação da tela foi reconhecida corretamente e o vídeo ficou no formato horizontal. O problema de reconhecimento da orientação horizontal relatado anteriormente ocorreu durante as gravações realizadas pelo aplicativo no Android, e não pelo site.\nDurante o teste pelo site, identifiquei outro ponto de usabilidade relacionado à gravação em POV. Como o celular fica preso a um suporte na cabeça durante a atividade, não há uma forma prática de interromper a gravação sem retirar o aparelho do suporte. É necessário retirar o celular da cabeça para conseguir acessar o comando de parada. Seria interessante disponibilizar uma forma mais prática de encerrar a gravação nesse tipo de situação. Mas no geral, gravar pelo site foi bem mais fácil, inclusive pra salvar.",
            impact: "Não me impediu",
            frequency: "Toda vez",
          },
        ],
      },
    ],
    reading:
      "Três frentes de problema aparecem com peso próprio: upload (lento e instável, com falhas específicas no iPhone), aprovação (percebida como rígida e às vezes inconsistente com a descrição da tarefa) e gravação (orientação de tela no Android). A Resp. A relata que gravar pelo site resolve a orientação, o que aponta um caminho de contorno claro.",
  },
  q4: {
    num: "04",
    col: "Coluna G",
    title: "O bug travou seu trabalho ou você conseguiu continuar?",
    metaType: "Múltipla escolha",
    metaResponses: "9 de 9 respostas",
    zebra: true,
    bars: [
      { label: "Aconteceu, mas não me impediu de gravar/enviar", pct: 77.78, count: "78% · 7 de 9" },
      { label: "Atrapalhou, mas dei um jeito", pct: 11.11, count: "11% · 1 de 9", muted: true },
      { label: "Travou completamente, não consegui seguir", pct: 11.11, count: "11% · 1 de 9", muted: true },
    ],
    reading:
      "Na maior parte dos relatos os bugs incomodam sem bloquear. Ainda assim, houve um caso de trava completa (Resp. B, dia 04, iPhone), em que a gravação foi perdida, e outro em que a trainer precisou recorrer a um caminho alternativo via Google Drive para conseguir enviar.",
  },
  q5: {
    num: "05",
    col: "Coluna H",
    title: "O bug aconteceu mais de uma vez?",
    metaType: "Múltipla escolha",
    metaResponses: "9 de 9 respostas",
    bars: [
      { label: "Aconteceu às vezes", pct: 55.56, count: "56% · 5 de 9" },
      { label: "Sim, acontece toda vez", pct: 44.44, count: "44% · 4 de 9" },
      { label: "Foi só uma vez", pct: 0, count: "0% · 0 de 9" },
    ],
    reading:
      "Nenhum relato foi de incidente único. Todos os 9 bugs são recorrentes, e em 4 casos o problema se reproduz toda vez. Esse é o sinal mais duro do conjunto de respostas: o produto tem falhas sistemáticas, e não pontuais.",
  },
  q6: {
    num: "06",
    col: "Coluna J",
    title: "De 1 a 5, quão fluida foi sua experiência geral no app?",
    metaType: "Escala numérica 1-5",
    metaResponses: "9 de 9 respostas",
    zebra: true,
    avg: "2,6",
    avgCap: "Média das 9 respostas",
    counts: [4, 0, 1, 4, 0],
    reading:
      "A distribuição é bimodal, com dois picos iguais em 1 e em 4, e nenhuma nota máxima em 5. As notas 4 são todas de Android/Samsung, e as notas 1 são todas de iPhone. A fluidez é percebida de forma muito diferente entre as duas plataformas.",
  },
  q7: {
    num: "07",
    col: "Coluna K",
    title: "De 1 a 5, o quanto você recomendaria a Invent Money do jeito que está hoje?",
    metaType: "Escala numérica 1-5",
    metaResponses: "9 de 9 respostas",
    avg: "1,1",
    avgCap: "Média das 9 respostas",
    counts: [8, 1, 0, 0, 0],
    reading:
      "A recomendação é quase unânime no valor mais baixo: 8 respostas em 1 e uma única em 2. Mesmo quem deu nota 4 de fluidez não recomendaria hoje. A barreira para indicar o produto não é só técnica, ela envolve também os critérios de aprovação e a percepção de custo-benefício do tempo investido.",
  },
  q8: {
    num: "08",
    col: "Coluna L",
    title: "Sugestões, elogios ou críticas para a operação da Invent Money",
    metaType: "Resposta aberta longa",
    metaResponses: "9 de 9 respostas",
    summaryKicker: "Resumo em uma linha",
    summaryLine:
      "Elogios pontuais à gravação e à navegação convivem com críticas fortes ao critério de aprovação, ao upload no iPhone e à orientação de tela no Android.",
    answers: [
      {
        id: "Resp. A · dia 04",
        device: "Sexta · Samsung",
        quote:
          "Feedback — 1º dia de teste | Android\nPontos positivos:\nA gravação realizada diretamente pelo aplicativo funciona de forma bastante prática e o carregamento do vídeo é significativamente mais rápido do que quando faço o upload de um vídeo já gravado no celular. Achei o processo de envio pelo próprio aplicativo bem mais ágil.\nPontos negativos / bugs identificados:\nReconhecimento da orientação do vídeo: gravei os vídeos na horizontal utilizando o próprio aplicativo, porém a plataforma não reconheceu corretamente a orientação. Como consequência, dois vídeos foram rejeitados, mesmo tendo sido gravados da mesma maneira. Seria importante verificar o reconhecimento/orientação dos vídeos gravados na horizontal.\nTela de gravação muito pequena: durante a gravação, a visualização fica pequena, dificultando acompanhar o que está sendo gravado e verificar se o enquadramento está correto. Uma opção de tela cheia ou uma prévia maior ajudaria bastante.\nSinal sonoro durante a gravação: após alguns minutos de gravação, percebi um sinal sonoro, aparentemente próximo dos cinco minutos. O som me deixou em dúvida sobre o status da gravação, pois não ficou claro se era apenas um aviso ou se alguma ação deveria ser realizada. Seria interessante ter um indicador visual mais evidente, como \"GRAVANDO\" + contador de tempo, para deixar claro que a gravação continua ativa.\nAnexei fotos e vídeos como comprovação do problema, mostrando que a rotação automática do celular estava ativada e também como o vídeo foi gravado e enviado para a plataforma. As evidências foram incluídas para demonstrar que o procedimento foi realizado corretamente, mesmo assim o sistema não reconheceu a orientação horizontal dos vídeos e eles foram rejeitados.\nDei nota 4 porque, de modo geral, a navegação e a fluidez do aplicativo são boas. Meu principal ponto de dificuldade está relacionado à gravação e ao envio dos vídeos, especialmente com a orientação da tela e o upload.",
      },
      {
        id: "Resp. B · dia 04",
        device: "Sexta · iPhone 14 Plus",
        quote:
          "Subi o print da tela com VPN, e as fotos do ambiente após ter feito a tarefa e a gravação sumir só porque a orientação da tela mudou. O app tem uma funcionalidade muito engessada, o ideal seria ter o app na Apple Store e quando iniciar a gravação, que abrisse uma tela cheia só para a câmera, como a hub faz.",
      },
      {
        id: "Resp. A · dia 05",
        device: "Sábado · Samsung",
        quote:
          "Dia 5 — Sábado\n\nHoje continuei realizando as tarefas do teste da Invent Money pelo celular Android.\n\nDurante o dia, gravei alguns vídeos utilizando a opção de gravar os vídeos fora do aplicativo, para depois fazer o envio dentro da tarefa. Porém, percebi que os vídeos gravados dessa forma demoram bastante tempo para subir/carregar no aplicativo, o que torna o processo mais demorado e dificulta a realização das tarefas.\n\nTambém tive um problema relacionado à avaliação de um dos vídeos. O vídeo foi reprovado com a justificativa de que o conteúdo não condizia com a tarefa. No entanto, a própria descrição da tarefa informava claramente que era possível lixar uma peça de madeira para depois pintá-la. O conteúdo do vídeo seguia justamente essa orientação. Enviei os prints da descrição para demonstrar que o vídeo estava de acordo com o que havia sido solicitado.\n\nDessa forma, além da demora no envio dos vídeos gravados fora do aplicativo, fica registrado também esse possível problema na avaliação/reprovação de um conteúdo que seguia as instruções apresentadas na tarefa.",
      },
      {
        id: "Resp. B · dia 05",
        device: "Sábado · iPhone 14 Plus",
        quote:
          "eu inclusive tenho um grupo de treinadoras que são intimas e ajudo e ensino elas, mas não indico a invent money por conta de como está hoje, muito exigente, demora demais para aprovar os vídeos e o sistema muito travado que infelizmente mais atrapalha do que ajuda a gente. Quando pensamos que são horas que poderíamos ter gravado para outras empresas e seríamos pagas, preferimos gravar para eles, já que a invent tem rejeitado muito material por bobeira.",
      },
      {
        id: "Resp. A · dia 06",
        device: "Domingo · Samsung",
        quote:
          "A experiência geral continua sendo positiva, com navegação simples e fácil de entender. Como sugestão de melhoria, seria interessante otimizar o tempo de upload dos vídeos gravados pela câmera do celular, pois o carregamento é bastante demorado. No terceiro dia não identifiquei novos bugs além dessa questão já observada anteriormente.\nComo não identifiquei nenhum bug que já não tenha sido relatado, não tenho novas  imagens pra enviar.",
      },
      {
        id: "Resp. B · dia 06",
        device: "Domingo · iPhone 14 Plus",
        quote:
          "Diminuir o tempo mínimo, corrigir os bugs de orientação de tela (erro muito bobo para um empresa tão grande de tecnologia não corrigir).",
      },
      {
        id: "Resp. A · dia 07",
        device: "Segunda · Samsung",
        quote:
          "A experiência geral foi positiva, com boa fluidez e navegação simples. No teste realizado hoje pelo site, a orientação horizontal do vídeo foi reconhecida corretamente. Como sugestão de melhoria, seria importante facilitar o encerramento da gravação, principalmente para gravações em POV, em que o celular fica preso a um suporte na cabeça e é necessário retirá-lo para acessar o comando de parada. Também seria interessante manter a otimização do tempo de upload dos vídeos.",
      },
      {
        id: "Resp. C · dia 07",
        device: "Segunda · iPhone 12",
        quote:
          "Acho muito legal poder gravar direto da câmera, porém a experiência de upload pra Invent é muito desgastante. Além disso, as revisões são contestáveis, haverão quadros em que as mãos não estarão 100% visiveis, é humano, haverão vídeos em que a tarefa poderá levemente sair do previsto, e acontece. Anteriormente, estava limpando um móvel e meu vídeo foi negado pois apareciam retratos de pessoas, não acho isso justo, além de outro que tive negado por, segundo o suporte, não ter sido gravado em ambiente de empresa, sendo que realmente estava gravando preparando alimentos para a empresa da minha mãe, porém estávamos na cozinha de casa, mas era pra loja dela. Acredito que a variação das tarefas poderia ser maior também, pois não podemos lavar louças, dobrar roupas e etc, o que é ruim de diversidade e limitante. Também tem limite de envio por categoria, atingi o limite de 15 envios, mas e se eu quisesse enviar mais? Acho que a plataforma é boa e pode melhorar ainda mais, também integrando outras formas de pagamento, como o Pix do Brasil",
      },
      {
        id: "Resp. B · dia 07",
        device: "Segunda · iPhone 14 Plus",
        quote: "corrigir os bugs de orientação de tela.",
      },
    ],
  },
  highlights: {
    num: "→",
    col: "Síntese",
    title: "Pontos fortes e principais melhorias",
    meta: "Extraídos das respostas abertas (F e L) ao longo dos 4 dias",
    positiveTitle: "Pontos fortes",
    positive: [
      {
        html:
          "<strong>Gravar direto pelo aplicativo ou pelo site</strong> foi elogiado como prático e com carregamento mais rápido do que o upload de um vídeo já gravado.",
        tally: "3 relatos",
      },
      {
        html:
          "<strong>Navegação simples e boa fluidez</strong> aparecem repetidamente nas respostas de Android.",
        tally: "3 relatos",
      },
      {
        html:
          "<strong>Gravar pelo site resolve a orientação de tela.</strong> A Resp. A confirma no dia 07 que o site reconhece o vídeo horizontal, ao contrário do app no Android.",
        tally: "1 relato · workaround",
      },
      {
        html:
          "<strong>Poder gravar direto da câmera</strong> é destacado como diferencial pela Resp. C.",
        tally: "1 relato",
      },
    ],
    negativeTitle: "Melhorias mais citadas",
    negative: [
      {
        html:
          "<strong>Critério de aprovação percebido como rígido ou inconsistente.</strong> Vídeos foram recusados por espelho ao fundo, endereço em pacote, retratos na parede, ambiente de casa, orientação de tela ou por não estarem alinhados à descrição da tarefa.",
        tally: "5 relatos",
      },
      {
        html:
          "<strong>Orientação de tela (horizontal e vertical)</strong> não é reconhecida corretamente no app do Android e leva à rejeição de vídeos gravados na horizontal.",
        tally: "4 relatos",
      },
      {
        html:
          "<strong>Upload lento ou instável.</strong> O carregamento é demorado no Android, e no iPhone exige duas etapas e falha em vídeos maiores sem mostrar uma mensagem clara.",
        tally: "4 relatos",
      },
      {
        html:
          "<strong>Falso alerta de VPN no iPhone.</strong> A tela trava e bloqueia a gravação mesmo sem VPN ativa no aparelho.",
        tally: "2 relatos",
      },
      {
        html:
          "<strong>Tempo mínimo de 5 minutos por vídeo</strong> não cabe em tarefas curtas como aguar plantas ou arrumar a cama.",
        tally: "1 relato",
      },
      {
        html:
          "<strong>Sem forma prática de parar a gravação em POV.</strong> É preciso tirar o celular do suporte de cabeça.",
        tally: "1 relato",
      },
      {
        html:
          "<strong>Tela de gravação muito pequena</strong> e sem um indicador claro de \"GRAVANDO\" com contador de tempo.",
        tally: "1 relato",
      },
      {
        html:
          "<strong>App inexistente na App Store.</strong> No iPhone o produto só funciona pelo navegador.",
        tally: "1 relato",
      },
      {
        html:
          "<strong>Limite de 15 envios por categoria</strong> e variação restrita de tarefas mencionados como limitantes.",
        tally: "1 relato",
      },
      {
        html:
          "<strong>Falta de Pix como forma de pagamento</strong> citada como oportunidade.",
        tally: "1 relato",
      },
    ],
  },
  closing: {
    kickerName: "Fechamento",
    kickerSep: "—",
    kickerLabel: "Leitura geral das 9 respostas em 4 dias",
    titleLine1: "A base funciona.",
    titleAccent: "precisam de ajuste",
    titleLine2Suffix: ".",
    body:
      "Em quatro dias de report, três trainers profissionais registraram nove bugs. Nenhum deles isolado, e todos concentrados no fluxo central do produto: gravação, upload e aprovação de vídeos. A fluidez percebida se divide claramente entre Android (nota 4) e iPhone (nota 1), e a recomendação hoje é quase unânime na nota mais baixa, com 8 respostas em 1 e uma única em 2. As melhorias apontadas são específicas e possíveis de resolver: um critério de aprovação mais humano, correção da orientação de tela no Android, ajuste do upload no iPhone e do falso alerta de VPN. É uma amostra pequena, mas com relatos densos, longitudinais e consistentes entre as respondentes, e um bom ponto de partida para priorizar as correções antes do próximo ciclo de validação.",
  },
};

export const betaTrainersContent: Record<Lang, Content> = { en, pt };
