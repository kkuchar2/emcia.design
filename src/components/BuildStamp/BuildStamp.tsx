/**
 * Baked at CF Pages build time from CF_PAGES_COMMIT_SHA.
 * Visible (tiny) so deploy cutover / race probes can see the live version.
 */
const BUILD_ID =
  process.env.CF_PAGES_COMMIT_SHA?.slice(0, 7) ||
  process.env.NEXT_PUBLIC_BUILD_ID ||
  'local'

export function BuildStamp() {
  return (
    <div
      id="emcia-build-id"
      data-build-id={BUILD_ID}
      aria-hidden="true"
      style={{
        position: 'fixed',
        right: 8,
        bottom: 8,
        zIndex: 9999,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 10,
        lineHeight: 1,
        letterSpacing: '0.04em',
        color: 'rgba(0,0,0,0.35)',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {BUILD_ID}
    </div>
  )
}
