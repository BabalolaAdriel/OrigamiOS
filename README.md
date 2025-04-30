# 🌸 OrigamiOS — AI-Powered Life & Task Management Agent

**OrigamiOS** is a lightweight, AI-driven productivity system built to intelligently manage tasks, prioritize goals, and deliver daily schedules and spiritual reminders across multiple platforms. Inspired by the precision of Japanese origami, OrigamiOS unfolds your life plan with structure, clarity, and ease.

---

## 📂 Repository Structure

```bash
├── index.html                   # Frontend input form (HTML/CSS/JS)
├── styles.css
├── script.js    
├── OrigamiOS_WorkFlow_n8n.json # n8n backend automation workflow
├── LICENSE                      # MIT License
└── README.md                    # Project documentation
```

---

## 🚀 Features

- **AI-Powered Task Prioritization** using [OpenRouter API](https://openrouter.ai/)
- **Smart Scheduling**: Auto-generates optimized daily plans
- **Multi-Channel Notification System**: Telegram Bot, Gmail, Outlook
- **Spiritual & Personal Reminders**: Bible study, prayer, reflection
- **Modular & Decentralized Input Handling**
- **Future-Ready**: Scalable to WhatsApp, calendar sync, and voice input

---

## 🧠 How OrigamiOS Works

1. **Input Collection**
   - A hosted `index.html` form allows users to submit their daily task ideas.
   - The input is sent as a JSON POST request to an **n8n webhook**.

2. **Task Storage & Processing**
   - Tasks are stored directly in **Google Sheets** via n8n.
   - A **Cron Trigger Node** retrieves the day's tasks at fixed intervals (every 3 hours).
   - A **Function Node** compiles tasks into an AI-readable prompt.

3. **AI Analysis & Prioritization**
   - The prompt is sent to a hosted model via the **OpenRouter API**.
   - AI returns a clean, ordered schedule with priority tags and actionable insights.

4. **Notification Delivery**
   - AI plans are delivered via:
     - **Telegram Bot** (Origami AI)
     - **Gmail API**
     - **Microsoft Outlook (Graph API)**

5. **Reminders & Routines**
   - Daily spiritual/personal messages (Bible verses, prayer times, motivation) are scheduled via Telegram and email.

---

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/BabalolaAdriel/OrigamiOS.git
cd OrigamiOS
```

### 2. Deploy the Frontend
- Host `index.html` using GitHub Pages or any static site host
- Ensure the form sends data to your deployed n8n webhook

### 3. Import n8n Workflow
- Open your n8n instance
- Import `OrigamiOS_WorkFlow_n8n.json`
- Configure credentials (Google Sheets, Telegram Bot Token, Gmail API, Outlook API, OpenRouter API Key)

---

## 🧩 Configuration & Customization

- **Update Cron Frequency** in n8n to fit your schedule
- **Modify Prompts** in the Function Node to tailor AI behavior
- **Toggle Notification Channels** (enable/disable WhatsApp, Outlook, etc.)
- **Expand Data Storage**: Optionally replace Google Sheets with databases

---

## 🛣️ Roadmap / Future Plans

- [ ] WhatsApp Notification Integration
- [ ] Calendar App Synchronization (Google Calendar)
- [ ] Voice-to-Task Input (Speech Recognition)
- [ ] Dashboard with Analytics (Task Trends, Goal Tracking)
- [ ] Smart Idea Sorter (Ideas → Projects or Routines)

---

## 🤝 Contributing

Want to help evolve OrigamiOS? Fork the repo, make improvements, and submit a pull request. For large changes, please open an issue to discuss first.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for more.

---

Built with purpose by [Adriel Babalola](https://github.com/BabalolaAdriel)

✨ OrigamiOS turns your daily chaos into intelligent structure. ✨

