export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <iframe 
        src="/index.html" 
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Coinvergence"
      />
    </div>
  );
}
