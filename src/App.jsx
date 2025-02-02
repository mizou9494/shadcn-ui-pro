import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import {
  Button
} from "@/components/ui/button"
function App() {

  return (
    <div className="w-screen grid place-content-center h-screen">
      <Alert className='h-full w-full bg-slate-300 grid place-content-center'>
        <Terminal className="h-4 w-4" />
        <AlertTitle>That was just a test</AlertTitle>
        <AlertDescription>
          We will add some additional components soon 👀
        </AlertDescription>
        <Button className="mt-4 p-8 hover:bg-slate-150 hover:text-slate-900 focus:outline-none focus:bg-yellow-500 focus:text-black-50" variant="destructive">Click me</Button>
      </Alert>
    </div>
  )
}

export default App
