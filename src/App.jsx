import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
function App() {

  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>That was just a test</AlertTitle>
      <AlertDescription>
        We will add some additional components soon 👀
      </AlertDescription>
    </Alert>
  )
}

export default App
