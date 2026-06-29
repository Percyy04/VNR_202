# 🏗️ Agent Build Spec – Web Thuyết Trình Lịch Sử 1961–1965

## Mục tiêu
Xây dựng một **React SPA** dùng để thuyết trình môn Lịch sử Đảng FPTU HCM, thay thế hoàn toàn slide. Web là trung tâm của buổi thuyết trình, không phải file đính kèm.

---

## Tech Stack

| Thành phần | Công nghệ |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Map | SVG tự vẽ (inline) |
| Deploy | GitHub Pages |

---

## Design System

### Palette (tông đỏ – đen – vàng lịch sử, tối vintage)
```
--color-bg:        #0D0D0D   /* nền chính: đen tuyệt đối */
--color-surface:   #1A1A1A   /* card/section background */
--color-border:    #2E2E2E   /* đường kẻ */
--color-red:       #C0392B   /* đỏ cách mạng – màu nhấn chính */
--color-gold:      #D4A017   /* vàng – highlight, số liệu */
--color-text:      #F0EAD6   /* text chính: kem nhạt – gợi giấy cũ */
--color-muted:     #888888   /* text phụ */
```

### Typography
```
Display font : "Playfair Display" (Google Fonts) – dùng cho heading lớn
Body font    : "Inter" – dùng cho paragraph, label
Mono font    : "JetBrains Mono" – dùng cho năm tháng, số liệu
```

### Signature element
> **Đường thời gian đỏ** chạy dọc suốt toàn trang (left border), như sợi chỉ đỏ xuyên suốt lịch sử. Mỗi section kết nối vào đường này bằng một node hình tròn có pulse animation.

---

## Cấu trúc trang (5 Section)

```
/
├── Section 0 – Hero (landing)
├── Section 1 – Đại hội III & Đường lối (Người 1)
├── Section 2 – Miền Bắc xây dựng CNXH (Người 2 + 3)
├── Section 3 – Miền Nam đánh bại Chiến tranh đặc biệt (Người 4 + 5)
├── Section 4 – Gắn kết thực tiễn hiện đại
└── (Optional) Chatbot nổi góc phải màn hình
```

### Navigation
- Thanh nav cố định trên cùng, nền trong suốt blur
- 5 dot indicator bên phải màn hình → click để nhảy section
- Keyboard arrow keys điều hướng section (fullscreen scroll snap)

---

## Chi tiết từng Section

### Section 0 – Hero
- Background: ảnh texture giấy cũ tối (CSS noise hoặc SVG pattern)
- Tiêu đề lớn: `"XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở MIỀN BẮC"` – font Playfair Display, màu kem
- Subtitle: `"Phát triển thế tiến công của cách mạng miền Nam · 1961–1965"`
- Dòng thời gian: `"1960 ──────────────────── 1965"` animate từ trái sang
- Badge nhóm + môn học góc dưới
- Nút "Bắt đầu →" scroll xuống Section 1

---

### Section 1 – Đại hội III (9/1960)

**Layout:** 2 cột – trái là text, phải là infographic

**Infographic phải:**
- Hình tháp 3 tầng:
  - Tầng 1 (đỉnh): "Mục tiêu chung – Thống nhất đất nước"
  - Tầng 2: "Miền Bắc – CNXH" | "Miền Nam – Dân tộc dân chủ"
  - Tầng 3 (đáy): "Đại hội III · 9/1960"
- Màu: đỏ gradient từ đáy lên đỉnh

**Text trái:**
- Ý nghĩa Đại hội
- 2 nhiệm vụ chiến lược (bullet có icon)
- Vai trò từng miền:
  - 🔴 Miền Bắc: **quyết định nhất**
  - 🟡 Miền Nam: **quyết định trực tiếp**

---

### Section 2 – Miền Bắc xây dựng CNXH

**Layout:** Full-width, 2 tab: `Kế hoạch 5 năm` | `Chi viện miền Nam`

#### Tab 1 – Kế hoạch 5 năm (1961–1965)
- Mục tiêu: công nghiệp hóa, cải tạo XHCN
- Grid 5 phong trào thi đua dạng card:
  ```
  [Đại Phong]    [Duyên Hải]   [Thành Công]
  [Bắc Lý]      [Ba nhất]
  ```
  - Mỗi card: icon + tên phong trào + lĩnh vực
  - Hover: flip card hiện mô tả ngắn
- Quote nổi bật: *"Mỗi người làm việc bằng hai để đền đáp lại cho đồng bào miền Nam ruột thịt"* – HCM, 3/1964

#### Tab 2 – Chi viện miền Nam
- Bản đồ SVG Việt Nam (inline):
  - Vẽ đường 559 (màu đỏ, dashed, animated dash-offset)
  - Vẽ đường 759 (màu vàng, dashed, ven biển)
  - Tooltip khi hover từng đường: tên + mô tả
  - Icon tàu nhỏ di chuyển theo đường 759 (CSS animation)
  - Icon xe tải nhỏ di chuyển theo đường 559
- Số liệu bên cạnh: hàng vạn cán bộ, chiến sĩ, vũ khí

---

### Section 3 – Miền Nam đánh bại "Chiến tranh đặc biệt"

**Layout:** Fullscreen, 3 phần cuộn ngang (horizontal scroll trong section)

#### Phần 3A – Mặt trận GPMN (20/12/1960)
- Card lớn với date badge "20/12/1960"
- Ý nghĩa ra đời, vai trò tổ chức
- Icon: ngôi sao vàng trên nền xanh đỏ

#### Phần 3B – Âm mưu địch vs Chủ trương Đảng
- Layout 2 cột đối lập:
  - ❌ Trái (nền đỏ tối): Âm mưu Mỹ – trực thăng vận, thiết xa vận, ấp chiến lược
  - ✅ Phải (nền xanh đậm): Chủ trương Đảng – 3 vùng, 3 mũi giáp công
- Trung ương Cục miền Nam (10/1961): badge riêng

#### Phần 3C – Thắng lợi tiêu biểu
- Timeline ngang 6 mốc (click từng mốc → hiện popup):

```
[Ấp Bắc]  [PĐ Phật giáo]  [Lật đổ NĐD]  [Bình Giã]  [Ba Gia]  [Đồng Xoài]
 1/1963        1963           11/1963       12/1964     5/1965     7/1965
```

- Cuối: Banner kết quả: **"Chiến lược Chiến tranh đặc biệt phá sản hoàn toàn"**

---

### Section 4 – Gắn kết thực tiễn hiện đại

**Layout:** 3 card ngang, mỗi card: Bài học lịch sử → Liên hệ hiện nay

| Bài học | Liên hệ hiện đại |
|---|---|
| Tinh thần "làm việc bằng hai" của miền Bắc | Phong trào chuyển đổi số quốc gia, tăng năng suất lao động |
| Đường 559 – hậu cần chiến lược | Hạ tầng logistics Việt Nam 2025 (cao tốc Bắc–Nam) |
| 3 mũi giáp công – phối hợp toàn diện | Chiến lược phát triển kinh tế kết hợp quốc phòng hiện nay |

---

## Optional – Chatbot

- Nút nổi góc dưới phải: icon 💬, màu đỏ
- Click mở panel chat nhỏ (300×400px)
- Gọi **Anthropic API** (`claude-sonnet-4-6`)
- System prompt:
```
Bạn là trợ lý lịch sử chuyên về giai đoạn 1961-1965 của Việt Nam.
Chỉ trả lời các câu hỏi liên quan đến nội dung bài thuyết trình:
Đại hội III, Kế hoạch 5 năm miền Bắc, chi viện đường 559/759,
Mặt trận GPMN, chiến lược Chiến tranh đặc biệt, các trận Ấp Bắc,
Bình Giã, Ba Gia, Đồng Xoài.
Trả lời ngắn gọn, súc tích bằng tiếng Việt.
Không bịa thêm thông tin ngoài phạm vi bài.
```
- Lưu conversation history trong state React

---

## Tính năng bổ trợ

### Presentation Mode
- Nút "🎯 Trình chiếu" trên nav → ẩn thanh cuộn, ẩn nav, chỉ hiện content + dot indicator
- Section tự động fullscreen scroll snap
- Phím → / ← điều hướng

### Progress Bar
- Thanh đỏ mỏng chạy ngang trên cùng trang
- Tăng dần theo % đã scroll

---

## Cấu trúc thư mục

```
src/
├── components/
│   ├── Nav.jsx
│   ├── DotIndicator.jsx
│   ├── ProgressBar.jsx
│   ├── Chatbot.jsx
│   └── sections/
│       ├── HeroSection.jsx
│       ├── DaiHoiSection.jsx
│       ├── MienBacSection.jsx
│       │   ├── KHNamNamTab.jsx
│       │   └── ChiVienTab.jsx
│       ├── MienNamSection.jsx
│       │   ├── MatTranCard.jsx
│       │   ├── AmMuuVsChutruong.jsx
│       │   └── ThangLoiTimeline.jsx
│       └── ThucTienSection.jsx
├── data/
│   ├── events.js        ← dữ liệu timeline
│   ├── phongTrao.js     ← 5 phong trào thi đua
│   └── thangLoi.js      ← 6 mốc thắng lợi
├── hooks/
│   └── useScrollSection.js
├── App.jsx
└── main.jsx
```

---

## Lưu ý build

- Không dùng `localStorage` hay `sessionStorage`
- Chatbot API key inject qua `import.meta.env.VITE_ANTHROPIC_API_KEY`
- Tất cả animation phải respect `prefers-reduced-motion`
- Responsive: ưu tiên desktop 1280px, mobile ≥ 768px vẫn dùng được
- Không dùng thư viện chart nặng – SVG thuần cho bản đồ và infographic
- Deploy: `npm run build` → `gh-pages` branch

---

## Checklist rubric FPTU

| Tiêu chí | Tính năng đáp ứng |
|---|---|
| Chiều sâu học thuật | Nội dung đúng giáo trình, đủ 5 section |
| Sáng tạo & hình thức | Web tương tác, không slide, design vintage |
| Tính tương tác | Bản đồ click, timeline popup, chatbot, Kahoot riêng |
| AI minh bạch | Docs báo cáo AI Usage riêng (file Word/PDF) |
| Thực tiễn | Section 4 liên hệ hiện đại |
