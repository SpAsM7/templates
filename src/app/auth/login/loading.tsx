import { AuthLoading } from "@/components/loading/auth-loading"

export default function LoginLoading() {
  return (
    <div className="flex flex-col space-y-2">
      <AuthLoading />
    </div>
  )
}
