// Supabase connection for the browser (the shared Family project, same as Felix Maze and Adventure).
// The publishable key is meant to be public; lkg_reviews only opens to the signed-in family account (RLS).
window.APP_CONFIG = {
  app: "learning-kangaroo",
  prefix: "lkg",
  table: "lkg_reviews",
  url: "https://twvqvutrcobedvuhnzxq.supabase.co",
  key: "sb_publishable_eqUo8HEdEB1hMQM4CpSVqA_9i6b0qCo",
  timeoutMs: 8000,
  links: [["index.html", "🏠 Home"], ["pack.html", "🖨️ Print in bulk"], ["answers.html", "✅ Answers and results"], ["index.html?level=archive", "🗄️ Archive: earlier worksheets"], ["answers.html?level=archive", "🗄️ Archive: answers and results"], ["format.html", "🧩 How to add questions"], ["../index.html", "🌀 Felix Maze"]]
};
