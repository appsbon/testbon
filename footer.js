// ==========================================
// PROFESSIONAL FOOTER COMPONENT
// ==========================================

const siteConfig = {
    siteName: "MOVIDOZ",
    siteUrl: "#",
    currentYear: new Date().getFullYear(),
    contactEmail: "contact@movidoz.com",
    disclaimerText: "MOVIDOZ does not store any files on its server. All contents are provided by non-affiliated third parties."
};

const footerHTML = `
<style>
.site-footer {
    background: #080808;
    border-top: 1px solid #1f1f1f;
    color: #999;
    font-size: 13px;
    padding: 50px 20px 30px;
    margin-top: 60px;
    line-height: 1.6;
}

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
}

.footer-about .footer-logo {
    font-size: 24px;
    font-weight: 900;
    color: #fff;
    text-decoration: none;
    letter-spacing: 1px;
    display: inline-block;
    margin-bottom: 12px;
}

.footer-about .footer-logo span {
    color: #e50914;
}

.footer-about p {
    color: #777;
    margin: 0 0 15px;
    max-width: 450px;
    font-size: 13px;
}

.footer-title {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 15px;
    position: relative;
}

.footer-title::after {
    content: '';
    display: block;
    width: 25px;
    height: 2px;
    background: #e50914;
    margin-top: 6px;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a {
    color: #888;
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: #e50914;
}

.footer-disclaimer-box {
    background: #111;
    border: 1px solid #222;
    border-radius: 6px;
    padding: 12px 16px;
    font-size: 12px;
    color: #666;
    margin-top: 15px;
}

.footer-bottom {
    max-width: 1400px;
    margin: 40px auto 0;
    padding-top: 20px;
    border-top: 1px solid #1a1a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    color: #666;
    font-size: 12px;
}

.legal-modal {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    z-index: 2000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.legal-modal.active {
    display: flex;
}

.legal-box {
    background: #141414;
    border: 1px solid #282828;
    width: min(700px, 100%);
    max-height: 80vh;
    border-radius: 8px;
    padding: 30px;
    overflow-y: auto;
    position: relative;
    color: #ccc;
    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
}

.legal-box h2 {
    color: #fff;
    margin-top: 0;
}

.close-legal {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    color: #aaa;
    font-size: 24px;
    cursor: pointer;
}

.close-legal:hover {
    color: #e50914;
}

@media (max-width: 900px) {
    .footer-container {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
}
</style>

<footer class="site-footer">
    <div class="footer-container">
        <!-- ABOUT BRAND COLUMN -->
        <div class="footer-about">
            <a href="${siteConfig.siteUrl}" class="footer-logo">${siteConfig.siteName.replace(' ', '<span>')}</span></a>
            <p>Your ultimate destination to stream free high-quality HD movies and series anytime, anywhere.</p>
            <div class="footer-disclaimer-box">
                <i class="fa-solid fa-triangle-exclamation" style="color:#e50914; margin-right:5px;"></i>
                ${siteConfig.disclaimerText}
            </div>
        </div>

        <!-- NAVIGATION LINKS -->
        <div>
            <div class="footer-title">Quick Links</div>
            <ul class="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#movieGrid">Latest Movies</a></li>
                <li><a href="#randomGrid">Random Pick</a></li>
            </ul>
        </div>

        <!-- LEGAL PAGES REQUIRED FOR AD NETWORKS -->
        <div>
            <div class="footer-title">Legal & Info</div>
            <ul class="footer-links">
                <li><a href="#" onclick="openLegalModal('privacy'); return false;">Privacy Policy</a></li>
                <li><a href="#" onclick="openLegalModal('terms'); return false;">Terms of Use</a></li>
                <li><a href="#" onclick="openLegalModal('dmca'); return false;">DMCA & Disclaimer</a></li>
                <li><a href="#" onclick="openLegalModal('contact'); return false;">Contact Us</a></li>
            </ul>
        </div>
    </div>

    <!-- COPYRIGHT -->
<div class="footer-bottom">
    <div>&copy; 2025 ${siteConfig.siteName}. All rights reserved.</div>
    <div>Designed for free streaming</div>
</div>
</footer>

<!-- MODAL POPUP FOR LEGAL POLICIES -->
<div class="legal-modal" id="legalModal">
    <div class="legal-box">
        <button class="close-legal" onclick="closeLegalModal()">&times;</button>
        <div id="legalModalContent"></div>
    </div>
</div>
`;

// Render footer when page loads
document.addEventListener("DOMContentLoaded", () => {
    let footerSlot = document.getElementById("footer-slot");
    
    // If no slot exists, create one at bottom of body
    if (!footerSlot) {
        footerSlot = document.createElement("div");
        footerSlot.id = "footer-slot";
        document.body.appendChild(footerSlot);
    }
    
    footerSlot.innerHTML = footerHTML;
});

// LEGAL POLICY TEXT CONTENT
function openLegalModal(type) {
    const modal = document.getElementById("legalModal");
    const content = document.getElementById("legalModalContent");
    
    let html = "";
    
    if (type === 'privacy') {
        html = `
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. It is ${siteConfig.siteName}'s policy to respect your privacy regarding any information we may collect while operating our website.</p>
            <h3>1. Log Files</h3>
            <p>We follow a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
            <h3>2. Cookies & Web Beacons</h3>
            <p>Like any other website, ${siteConfig.siteName} uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. Third-party ad vendors may also use cookies to serve ads based on prior visits.</p>
        `;
    } else if (type === 'terms') {
        html = `
            <h2>Terms of Use</h2>
            <p>By accessing ${siteConfig.siteName}, you agree to be bound by these website Terms and Conditions of Use and agree that you are responsible for agreement with any applicable local laws.</p>
            <h3>1. Content Usage</h3>
            <p>All video content provided on this website is hosted on third-party media platforms. ${siteConfig.siteName} does not stream or upload media files directly to its server.</p>
            <h3>2. Limitations</h3>
            <p>In no event shall ${siteConfig.siteName} or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.</p>
        `;
    } else if (type === 'dmca') {
        html = `
            <h2>DMCA & Disclaimer</h2>
            <p>${siteConfig.siteName} takes copyright infringement very seriously. We comply with 17 U.S.C. § 512 and the Digital Millennium Copyright Act (“DMCA”).</p>
            <p>It is our policy to respond to any infringement notices and take appropriate actions under the DMCA. We do not host, store, or upload any media content directly. All videos are embedded from third-party storage providers.</p>
            <p>If your copyrighted material has been indexed on our site and you want it removed, please email us with proof of ownership at: <strong>${siteConfig.contactEmail}</strong></p>
        `;
    } else if (type === 'contact') {
        html = `
            <h2>Contact Us</h2>
            <p>If you have questions, feedback, copyright concerns, or business inquiries, please reach out to our team at:</p>
            <p style="background:#222; padding:12px; border-radius:6px; font-weight:bold; color:#e50914;">
                <i class="fa-solid fa-envelope"></i> ${siteConfig.contactEmail}
            </p>
            <p>We usually respond to all legitimate requests within 24 to 48 hours.</p>
        `;
    }
    
    content.innerHTML = html;
    modal.classList.add("active");
}

function closeLegalModal() {
    const modal = document.getElementById("legalModal");
    modal.classList.remove("active");
}