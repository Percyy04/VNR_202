# UI REFACTOR SPEC – VINTAGE NEWSPAPER EDITION

## Goal

Chuyển toàn bộ website từ phong cách:

- Dark luxury
- Documentary hiện đại
- Glassmorphism

sang phong cách:

- Báo lịch sử thập niên 1960
- Tư liệu lưu trữ
- Newspaper Archive
- Vintage Editorial Design

Mục tiêu là tạo cảm giác người xem đang đọc một số báo đặc biệt về giai đoạn 1961–1965.

---

## Concept

**"NHÂN DÂN – SỐ ĐẶC BIỆT 1961–1965"**

Website phải giống:

- Báo giấy cũ
- Hồ sơ lịch sử
- Triển lãm tư liệu số

KHÔNG giống:

- Dashboard
- SaaS
- Landing page startup
- Game UI

---

## Color System

Replace toàn bộ dark theme hiện tại.

```css
--paper-bg: #f4e7d0; /* nền chính: giấy cũ kem */
--paper-dark: #e6d5b8; /* nền section xen kẽ */
--ink: #1a1a1a; /* text chính: mực đen */
--headline-red: #9e1b1b; /* đỏ tiêu đề báo */
--gold: #b8860b; /* vàng nhấn */
--border: #bca98c; /* đường kẻ vintage */
--muted: #6b6b6b; /* text phụ */
```

**Contrast requirement:** `--ink` trên `--paper-bg` phải đạt ratio ≥ 7:1.

**Background:** aged paper texture (CSS SVG filter, không dùng ảnh nặng).

**Overlay:** paper grain + dust + subtle stains (CSS only).

---

## Typography

```
Display / Heading : Playfair Display (Google Fonts)
Alternative       : Cormorant Garamond
Body              : Source Serif Pro hoặc Merriweather
Date / Year       : JetBrains Mono hoặc Special Elite
```

---

## Images

> **Placeholder:** Dùng `picsum.photos` (grayscale filter) trong lúc build.  
> Team tự replace ảnh lịch sử thật sau khi có nguồn.

**Filter áp dụng cho mọi ảnh lịch sử:**

```css
filter: grayscale(100%) sepia(20%) contrast(110%);
```

**Hover:** giảm nhẹ grayscale. Không dùng modern photo filter.

---

## Global Layout

Mỗi section = một trang báo.

Thay thế Card UI bằng Editorial Layout:

```
[ HEADLINE ]
[ Image ]
[ 2-column newspaper text ]
[ Pull quote ]
[ Historical note ]
```

---

## Responsive Rules

```
Desktop  1280px : layout gốc theo spec
Tablet    768px : 2-col → 1-col stack
Mobile   <768px : ẩn decorative elements, giữ nội dung chính
```

---

## Background Effects

**Dùng:**

- Paper grain texture (CSS)
- Paper fold texture (CSS)
- Dust particles (CSS)
- Ink imperfections (CSS SVG)

**Không dùng:**

- Heavy blur
- Glassmorphism
- Neon glow

---

## Animation Rules

**Được phép:**

- fade in
- slide up
- newspaper clipping reveal
- count-up numbers

**Không dùng:**

- Parallax overload
- 3D transforms
- Rotations
- Flashy effects

> `prefers-reduced-motion`: disable toàn bộ animation khi user prefer.

---

## Hero Section

Transform thành **newspaper front page**.

```
┌─────────────────────────────────────────┐
│           B Á O   N H Â N   D Â N       │
│        SỐ ĐẶC BIỆT · 1961–1965          │
├─────────────────────────────────────────┤
│                                         │
│   [  HISTORICAL IMAGE – 60-70% weight ] │
│                                         │
├─────────────────────────────────────────┤
│  XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở MIỀN BẮC │
│  Phát triển thế tiến công               │
│  của cách mạng miền Nam                 │
│                        Ngày: 1961–1965  │
└─────────────────────────────────────────┘
```

- Tiêu đề: Playfair Display, `--headline-red`
- Image: grayscale + sepia, chiếm 60–70% visual weight
- Badge "Ngày phát hành: 1961–1965" góc dưới phải

---

## Section 1 – Đại hội III (9/1960)

Transform thành **Featured Newspaper Article**.

```
┌──────────────┬───────────────────────────┐
│              │  ĐẠI HỘI ĐẠI BIỂU         │
│  [  Photo  ] │  TOÀN QUỐC LẦN THỨ III    │
│              │  9/1960                    │
│              ├───────────┬───────────────┤
│              │  col 1    │  col 2        │
│              │  article  │  article      │
└──────────────┴───────────┴───────────────┘
```

- Trái: Historical photo (grayscale)
- Phải: Headline lớn + 2-column article text
- Infographic pyramid giữ lại nhưng redesign theo style **printed newspaper infographic** (ink style, thin borders, paper texture)

---

## Section 2 – Miền Bắc xây dựng CNXH

### Tab 1 – Kế hoạch 5 năm

Convert cards thành **newspaper feature blocks**.

Mỗi phong trào (Đại Phong, Duyên Hải, Thành Công, Bắc Lý, Ba Nhất):

```
[ Photo grayscale ]
[ Tên phong trào  ]
[ Short caption   ]
```

Layout: **3-column newspaper grid**.

Hover: slight zoom only — không dùng glass effect.

Quote HCM 3/1964: styled như **pull quote báo** (border trái đỏ, italic, font lớn hơn).

### Tab 2 – Chi viện miền Nam

**Visual centerpiece của toàn trang.**

- SVG bản đồ Việt Nam lớn
- Background: old military map paper style (CSS SVG filter, không ảnh thật)
- Đường 559: `--headline-red`, dashed, animated `stroke-dashoffset`
- Đường 759: `--gold`, dashed, ven biển
- Icon xe tải di chuyển theo đường 559 (CSS animation)
- Icon tàu di chuyển theo đường 759 (CSS animation)
- Side panel: historical statistics — styled như **newspaper side note** (border box, font mono)

---

## Section 3 – Chiến tranh đặc biệt

Transform thành **WAR REPORT EDITION**.

Ba câu chuyện lớn, mỗi câu chuyện = một newspaper headline:

```
[ LARGE YEAR MARKER ]
[ Historical image  ]
[ Article layout    ]
```

Timeline ngang → **horizontal newspaper chronology**:

```
[Ấp Bắc]──[PĐ Phật giáo]──[Lật đổ NĐD]──[Bình Giã]──[Ba Gia]──[Đồng Xoài]
 1/1963        1963           11/1963       12/1964     5/1965     7/1965
```

Mỗi milestone:

- Photo (grayscale)
- Date
- Caption

Click milestone → **expand article clipping** (Framer Motion AnimatePresence).

---

## Section 4 – Gắn kết thực tiễn

Transform thành **"TỪ 1965 ĐẾN 2025"**.

Layout: split comparison newspaper:

```
┌──────────────────┬──────────────────┐
│  Bài học lịch sử │  Việt Nam 2025   │
│  (vintage style) │  (modern photo)  │
│                  │                  │
│       ←──────────→ connecting arrow │
└──────────────────┴──────────────────┘
```

3 cặp nội dung:

| Bài học lịch sử                      | Liên hệ hiện đại                        |
| ------------------------------------ | --------------------------------------- |
| Tinh thần "làm việc bằng hai"        | Phong trào chuyển đổi số quốc gia       |
| Đường 559 – hậu cần chiến lược       | Cao tốc Bắc–Nam, hạ tầng logistics 2025 |
| 3 mũi giáp công – phối hợp toàn diện | Chiến lược kinh tế kết hợp quốc phòng   |

---

## Timeline Dọc Trái (Signature Element)

Giữ nguyên đường đỏ xuyên suốt.

Modify:

- Trông như **archive annotation line** (không phải UI component hiện đại)
- Nodes: màu aged brass (`#B8860B`), subtle pulse animation
- Kết nối mỗi section vào đường này bằng node tròn

---

## Presentation Mode

Khi bật:

- Ẩn navigation
- Ẩn chatbot
- Ẩn scrollbar
- Chỉ hiện content
- Trang giống **museum presentation panel**

---

## Danh sách ảnh cần tìm (replace placeholder sau)

### Hero

```
Đại hội III năm 1960
Hồ Chí Minh năm 1960
Miền Bắc xây dựng CNXH
```

### Đại hội III (3 ảnh)

```
Đại hội đại biểu toàn quốc lần thứ III
Hồ Chí Minh tại Đại hội III
Hội trường Đại hội III 1960
```

### Phong trào thi đua (1 ảnh/phong trào)

```
Phong trào Đại Phong – Hợp tác xã Đại Phong
Phong trào Duyên Hải – Công nhân miền Bắc 1960
Phong trào Thành Công – Thủ công nghiệp miền Bắc
Trường Bắc Lý – Phong trào giáo dục
Phong trào Ba Nhất – Bộ đội miền Bắc 1960
```

### Chi viện miền Nam (8–10 ảnh)

```
Đường Trường Sơn – Đường mòn Hồ Chí Minh
Bộ đội Trường Sơn – Xe tải Trường Sơn
Đoàn 559 – Đường 559
Đoàn tàu không số – Đường 759
Vận tải biển chi viện miền Nam
```

### Mặt trận GPMN (3–4 ảnh)

```
Lễ thành lập Mặt trận Dân tộc Giải phóng miền Nam
Cờ Mặt trận Dân tộc Giải phóng
```

### Chiến tranh đặc biệt (4–6 ảnh)

```
Ấp chiến lược – Trực thăng vận – Thiết xa vận
Quân đội Sài Gòn 1960
```

### Các thắng lợi (1 ảnh/mốc)

```
Ấp Bắc 1963
Phong trào Phật giáo 1963
Lật đổ Ngô Đình Diệm
Bình Giã 1964
Ba Gia 1965
Đồng Xoài 1965
```

### Thực tiễn hiện đại (3–6 ảnh)

```
Chuyển đổi số Việt Nam
Cao tốc Bắc Nam
Logistics Việt Nam
Kinh tế kết hợp quốc phòng
```

---

## Bonus Assets

Texture miễn phí (CC0) nên tìm:

- Old paper texture
- Newspaper texture / newsprint
- Paper grain
- Paper fold
- Ink stain / ink imperfections

Nguồn gợi ý: [TextureLabs](https://texturelabs.org) (CC0 free textures)
