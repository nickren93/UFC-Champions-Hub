import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div>
        <h3>Resources</h3>
        <p>
          <a
            href="https://www.ufc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            UFC Official Website
          </a>
          <br />
          <a
            href="https://www.espn.com/mma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESPN MMA
          </a>
          <br />
          <a
            href="https://www.youtube.com/@ufc"
            target="_blank"
            rel="noopener noreferrer"
          >
            UFC YouTube Channel
          </a>
        </p>
      </div>

      <div>
        <h3>Follow UFC</h3>
        <p>
          <a
            href="https://www.youtube.com/@ufc"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <br />
          <a
            href="https://www.facebook.com/ufc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <br />
          <a
            href="https://twitter.com/ufc"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
          </a>
        </p>
      </div>

      <div>
        <h3>Project Info</h3>
        <p>
          This is a front-end demo project built for educational purposes.
          <br />
          Data is provided via a mock API.
        </p>
      </div>

      <div>
        <h3>About</h3>
        <address>
          Built by <strong>Sitong (Nick) Ren</strong>
          <br />
          Software Engineer
        </address>
        <details>
          <summary>&copy; 2026 UFC Champions Hub</summary>
          <p>All rights reserved.</p>
        </details>
      </div>
    </footer>
  );
}

export default Footer;
