/* =============================================================
   EVERYTHING YOU WILL WANT TO EDIT LIVES IN THIS ONE FILE.
   Change the text here and every page of the site updates.
   Lines marked TODO still need the parish's real details.
   ============================================================= */

/** Builds a link that works both locally and once deployed. */
export const url = (path = "") =>
  (import.meta.env.BASE_URL + "/" + path).replace(/\/{2,}/g, "/");

export const church = {
  name: "Jesus Arena Parish",
  fullName: "RCCG Jesus Arena Parish",
  denomination: "The Redeemed Christian Church of God",
  tagline: "A place to belong, to grow and to serve",
  description:
    "Join the Redeemed Christian Church of God, Jesus Arena Parish for worship, the Word and fellowship. Everyone is welcome.",
  /* TODO: replace with the parish's real contact details. */
  address: {
    line1: "Add the parish street address",
    line2: "City, State",
    mapsQuery: "RCCG Jesus Arena Parish",
  },
  phone: "Add the parish phone number",
  phoneHref: "tel:+2340000000000",
  email: "hello@example.com",
  officeHours: "Monday – Friday, 9:00 AM – 4:00 PM",
};

export const socials = [
  /* TODO: paste the parish's real page links. */
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Instagram", href: "#", icon: "instagram" },
] as const;

export const nav = [
  { label: "Home", href: url() },
  { label: "About", href: url("about") },
  { label: "Ministries", href: url("ministries") },
  { label: "Events", href: url("events") },
  { label: "Sermons", href: url("sermons") },
  { label: "Contact", href: url("contact") },
];

/* TODO: confirm these match the parish's actual timetable. */
export const services = [
  {
    day: "Sunday",
    name: "Sunday School",
    time: "8:00 – 9:00 AM",
    note: "Teaching for every age group before the main service.",
  },
  {
    day: "Sunday",
    name: "Main Worship Service",
    time: "9:00 – 11:30 AM",
    note: "Worship, the Word and prayer. Children's church runs alongside.",
  },
  {
    day: "Tuesday",
    name: "Digging Deep & Bible Study",
    time: "6:00 – 7:30 PM",
    note: "A closer look at the Scriptures, with room for questions.",
  },
  {
    day: "Thursday",
    name: "Faith Clinic & Prayer",
    time: "6:00 – 7:30 PM",
    note: "An evening of intercession, healing and thanksgiving.",
  },
];

export const beliefs = [
  {
    title: "The Word of God",
    body: "The Bible is the inspired, infallible Word of God and the final authority for faith and living.",
  },
  {
    title: "Salvation in Christ",
    body: "We are saved by grace through faith in Jesus Christ alone — not by works, so that no one may boast.",
  },
  {
    title: "The Holy Spirit",
    body: "The Holy Spirit indwells and empowers every believer for holy living, for service and for witness.",
  },
  {
    title: "Holiness",
    body: "We pursue holiness in heart and in conduct, because without it no one will see the Lord.",
  },
  {
    title: "Prayer",
    body: "Prayer is the engine room of the church. We pray for our families, our community and our nation.",
  },
  {
    title: "Fruitfulness",
    body: "Every member has a gift, and every gift is given for the building up of the whole body.",
  },
];

export const ministries = [
  {
    name: "Children's Church",
    body: "Bible lessons, songs and activities for ages 3–12, running during the main Sunday service.",
  },
  {
    name: "Teens & Youth",
    body: "A lively, safe space for young people to ask honest questions and build a faith that is truly their own.",
  },
  {
    name: "Choir & Worship Team",
    body: "Singers and instrumentalists leading the congregation into the presence of God. Rehearsals hold weekly.",
  },
  {
    name: "Good Women's Fellowship",
    body: "Prayer, mentoring and practical support for women in every stage of life.",
  },
  {
    name: "Men's Fellowship",
    body: "Building men who lead their homes, their work and their community with integrity.",
  },
  {
    name: "Evangelism & Outreach",
    body: "Taking the good news beyond our walls through visitation, street outreach and community care.",
  },
  {
    name: "Ushering & Welcome",
    body: "The first smile every visitor sees — serving with order, warmth and hospitality.",
  },
  {
    name: "Media & Technical",
    body: "Sound, live streaming, photography and design, so the message travels far beyond the building.",
  },
  {
    name: "Prayer Band",
    body: "Interceding for the parish, our families and our nation at our weekly prayer meeting.",
  },
];

/* TODO: keep this list current — it drives the Events page and the home page. */
export const events = [
  {
    title: "Holy Communion Service",
    when: "First Sunday of every month",
    where: "Main auditorium",
    badge: { top: "Every", main: "1st" },
    body: "We gather at the Lord's table to remember His death, celebrate His life and renew our covenant with Him.",
  },
  {
    title: "Holy Ghost Service",
    when: "Evening of the first Friday",
    where: "Main auditorium",
    badge: { top: "Monthly", main: "Fri" },
    body: "A night of worship, the Word and prayer — believing God for a fresh outpouring on every family.",
  },
  {
    title: "Annual Thanksgiving",
    when: "Add the date",
    where: "Main auditorium",
    badge: { top: "Annual", main: "★" },
    body: "A day set apart to return to God with praise for all He has done in the life of the parish.",
  },
  {
    title: "Crossover Night",
    when: "31 December, from 9:00 PM",
    where: "Main auditorium",
    badge: { top: "Dec", main: "31" },
    body: "We end the year on our knees and step into the new one with thanksgiving, prophecy and praise.",
  },
  {
    title: "Workers' Meeting",
    when: "Weekly, after the main service",
    where: "Fellowship hall",
    badge: { top: "Weekly", main: "✦" },
    body: "Training, planning and prayer for everyone serving in a unit of the parish.",
  },
  {
    title: "Digging Deep",
    when: "Every Tuesday, 6:00 PM",
    where: "Main auditorium",
    badge: { top: "Weekly", main: "Tue" },
    body: "Our midweek study, working carefully through a book of the Bible together.",
  },
];

/* TODO: paste the real link to each message (YouTube, Facebook, podcast…). */
export const sermons = [
  {
    title: "Standing on the Promises",
    series: "Faith",
    preacher: "The Pastor",
    date: "Most recent",
    body: "What to do when the answer is delayed, and how to hold on to what God has already said.",
    href: "#",
  },
  {
    title: "A House Built on the Rock",
    series: "Family",
    preacher: "The Pastor",
    date: "Recent",
    body: "Practical, biblical wisdom for building a home that stands when the storms come.",
    href: "#",
  },
  {
    title: "The Power of a Praying Church",
    series: "Prayer",
    preacher: "The Pastor",
    date: "Recent",
    body: "Why the early church turned the world upside down, and how we walk in that same power today.",
    href: "#",
  },
  {
    title: "Chosen to Bear Fruit",
    series: "Discipleship",
    preacher: "The Pastor",
    date: "Recent",
    body: "Abiding in the vine is not a season of the Christian life — it is the whole of it.",
    href: "#",
  },
  {
    title: "The God Who Restores",
    series: "Hope",
    preacher: "The Pastor",
    date: "Recent",
    body: "God is able to give back the years the locust has eaten. A word for anyone starting again.",
    href: "#",
  },
  {
    title: "Holiness Is Still Beautiful",
    series: "Holiness",
    preacher: "The Pastor",
    date: "Recent",
    body: "Why the call to be set apart is not a burden, but the doorway into the presence of God.",
    href: "#",
  },
];

/* TODO: replace with the parish's real account details before publishing. */
export const giving = {
  accountName: "RCCG Jesus Arena Parish",
  bank: "Add your bank name",
  accountNumber: "Add your account number",
  reference: "Tithe / Offering / Project",
};

export const pastor = {
  /* TODO: the pastor's name and their welcome message. */
  name: "The Pastor",
  role: "Parish Pastor, RCCG Jesus Arena Parish",
  quote:
    "Whatever season you are walking through, you do not have to walk it alone. Come and worship with us — God has a word for you.",
};

/* The meaning the RCCG gives to the colours of its emblem. */
export const emblem = [
  { color: "blue", label: "Blue", meaning: "Agape — the divine love of God" },
  { color: "red", label: "Red rings", meaning: "The blood of Jesus, our covering" },
  { color: "white", label: "White dove", meaning: "The Holy Spirit, our senior partner" },
  { color: "green", label: "Green", meaning: "Fruitfulness and increase" },
];
