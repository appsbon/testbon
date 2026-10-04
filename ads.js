// ==========================================
// ADVERTISEMENT CONFIGURATION & INJECTION
// ==========================================

// Paste your actual Ad Network scripts or HTML banners here:
const topAdContent = `
    <div style="background:#1a1a1a; border:1px dashed #444; border-radius:8px; padding:20px; text-align:center; color:#888;">
        <i class="fa-solid fa-rectangle-ad" style="font-size:24px; color:#e50914; margin-bottom:8px;"></i>
        <p style="margin:0; font-size:13px; font-weight:bold;">ADVERTISEMENT </p>
        <span style="font-size:11px; color:#666;">Place your ads here</span>
    </div>
`;

const bottomAdContent = `
    <div style="background:#1a1a1a; border:1px dashed #444; border-radius:8px; padding:20px; text-align:center; color:#888;">
        <i class="fa-solid fa-rectangle-ad" style="font-size:24px; color:#e50914; margin-bottom:8px;"></i>
        <p style="margin:0; font-size:13px; font-weight:bold;">ADVERTISEMENT</p>
        <span style="font-size:11px; color:#666;">PLace your ads here</span>
    </div>
`;

// Function to automatically render ads once the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    const topSlot = document.getElementById("ad-slot-top");
    const bottomSlot = document.getElementById("ad-slot-bottom");

    if (topSlot) {
        topSlot.innerHTML = topAdContent;
    }

    if (bottomSlot) {
        bottomSlot.innerHTML = bottomAdContent;
    }
});