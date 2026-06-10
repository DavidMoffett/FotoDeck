import './App.css'

function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '22px',
        background:
          'radial-gradient(circle at top left, rgba(200, 162, 74, 0.18), transparent 34rem), #eeeeec',
        color: '#141414',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          width: 'min(1040px, 100%)',
          display: 'grid',
          gap: '18px',
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '18px',
            padding: '18px 20px',
            borderRadius: '30px',
            background: 'rgba(255, 255, 255, 0.62)',
            boxShadow: '0 10px 30px rgba(20, 20, 20, 0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                display: 'grid',
                placeItems: 'center',
                borderRadius: '50%',
                background: '#171717',
                color: '#ffffff',
                fontWeight: 900,
                letterSpacing: '-0.08em',
              }}
            >
              F
            </div>

            <div>
              <strong
                style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  letterSpacing: '-0.05em',
                }}
              >
                FotoDeck
              </strong>

              <span
                style={{
                  display: 'block',
                  marginTop: '2px',
                  color: '#6f6f69',
                  fontSize: '0.86rem',
                  fontWeight: 750,
                }}
              >
                Simple gallery selling for photographers
              </span>
            </div>
          </div>

          <div
            style={{
              borderRadius: '999px',
              padding: '9px 13px',
              background: '#fffaf0',
              color: '#7a541f',
              fontSize: '0.78rem',
              fontWeight: 900,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Coming soon
          </div>
        </header>

        <section
          style={{
            minHeight: '520px',
            display: 'grid',
            alignContent: 'end',
            borderRadius: '30px',
            padding: 'clamp(26px, 5vw, 54px)',
            color: '#ffffff',
            boxShadow: '0 20px 60px rgba(20, 20, 20, 0.08)',
            background:
              'linear-gradient(180deg, rgba(17, 17, 17, 0.08), rgba(17, 17, 17, 0.86)), linear-gradient(135deg, #262626, #8b8b82)',
            overflow: 'hidden',
          }}
        >
          <p
            style={{
              margin: '0 0 10px',
              color: 'rgba(255, 255, 255, 0.68)',
              fontSize: '0.82rem',
              fontWeight: 950,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
            }}
          >
            Site under development
          </p>

          <h1
            style={{
              margin: 0,
              maxWidth: '860px',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.86,
              letterSpacing: '-0.1em',
            }}
          >
            FotoDeck is being updated.
          </h1>

          <p
            style={{
              maxWidth: '680px',
              margin: '22px 0 0',
              color: 'rgba(255, 255, 255, 0.74)',
              fontSize: 'clamp(1rem, 1.4vw, 1.18rem)',
              lineHeight: 1.45,
              fontWeight: 750,
            }}
          >
            We’re preparing the next version of FotoDeck. Public access is currently closed while testing continues.
          </p>
        </section>

        <section
          style={{
            borderRadius: '30px',
            background: '#f8f8f6',
            boxShadow: '0 10px 30px rgba(20, 20, 20, 0.06)',
            padding: '22px',
            display: 'grid',
            gap: '8px',
          }}
        >
          <strong
            style={{
              fontSize: '1rem',
              letterSpacing: '-0.03em',
            }}
          >
            Please check back soon
          </strong>

          <p
            style={{
              margin: 0,
              color: '#6f6f69',
              fontSize: '0.94rem',
              lineHeight: 1.45,
              fontWeight: 750,
            }}
          >
            Existing public gallery access is temporarily unavailable while FotoDeck is being prepared for its next version.
          </p>
        </section>
      </section>
    </main>
  )
}

export default App