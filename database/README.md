# 📌 Community Platform Database Schema

## 🚀 Overview
This repository contains SQL schema files for a **Telegram-like community platform**, supporting **users, posts, comments, communities, real-time messages, tokens, micro-earnings, and reputation tracking**.

The database is built using **PostgreSQL** and **Supabase** for real-time features.  
It follows a **relational structure** with proper **primary keys, foreign keys, and indexes**.

---




---

## 🛠️ How It Works

### **1️⃣ Users (`users.sql`)**
- Stores user information.
- Uses **UUID** as the primary key.
- Authentication is done via **World ID**.
- Supports **profile pictures**, stored using **Supabase Storage**.
- **Reputation scores** track user engagement.

### **2️⃣ Posts (`posts.sql`)**
- Users can create multiple posts (**one-to-many** relationship).
- Each post has **likes and comments** counters.

### **3️⃣ Comments (`comments.sql`)**
- Users can comment on posts (**one-to-many** relationship).
- Each comment is tied to a **post** and a **user**.

### **4️⃣ Communities (`communities.sql`)**
- Users can create or join multiple communities (**many-to-many** relationship).
- Communities can be **private, token-gated, or reputation-gated**.

### **5️⃣ Community Members (`community_members.sql`)**
- Tracks users who join communities.
- Stores **roles** (e.g., `admin`, `member`).
- Keeps a **community-specific reputation score**.

### **6️⃣ Messages (`messages.sql`)**
- **Stores messages sent within communities.**
- Supports **real-time chat functionality**.
- Linked to **users and communities**.

### **7️⃣ Tokens (`tokens.sql`)**
- Users can **create and trade tokens**.
- Tokens have **supply limits and symbols**.

### **8️⃣ Token Transfers (`token_transfers.sql`)**
- Stores **peer-to-peer token transactions**.
- Tracks **senders and receivers**.

### **9️⃣ Micro-Earnings (`micro_earnings.sql`)**
- Users can complete **tasks** (e.g., surveys, product testing).
- Tasks reward users with **tokens or reputation**.

### **🔟 Reputation (`reputation.sql`)**
- Tracks **user reputation changes**.
- Logs **reputation-impacting activities** (posts, community engagement, etc.).

---

## 🔗 **Relationships Between Tables**
✅ **Users ↔ Posts** → A user can create many posts, but each post belongs to one user.  
✅ **Users ↔ Comments** → A user can comment on many posts, but each comment belongs to one user.  
✅ **Users ↔ Communities** → A user can create or join multiple communities.  
✅ **Users ↔ Tokens** → A user can create multiple tokens.  
✅ **Users ↔ Token Transfers** → Tracks token transactions between users.  
✅ **Users ↔ Reputation** → Reputation updates based on user actions.  

---
