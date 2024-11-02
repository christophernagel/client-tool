import dynamic from 'next/dynamic'
import ToolsSuite from '../components/ToolsSuite'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ToolsSuite />
    </main>
  )
}
