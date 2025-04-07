import { useState, useEffect } from "react";
import localforage from "localforage";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  ErrorMessages,
  SuccessMessages,
} from "@/shared-interfaces/constants/messages";
import { StorageKeys } from "@/shared-interfaces/constants/storageKey";
import { Skeleton } from "../ui/skeleton";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm({
  className,
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    localforage.getItem<boolean>(StorageKeys.IS_LOGGED_IN).then((value) => {
      setIsLoggedIn(value ?? false);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError(ErrorMessages.LOGIN_FIELDS_REQUIRED);
      return;
    }

    await localforage.setItem(StorageKeys.IS_LOGGED_IN, true);
    await localforage.setItem(StorageKeys.USER, { email });
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await localforage.removeItem(StorageKeys.IS_LOGGED_IN);
    await localforage.removeItem(StorageKeys.USER);
    setIsLoggedIn(false);
  };

  if (loading) return <Skeleton />;

  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold">{SuccessMessages.LOGIN_SUCCESS}</h1>
        <Button onClick={handleLogout} variant="destructive">
          Logout
        </Button>
      </div>
    );
  }

  return (
    <form className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pr-10"
            />
            <Button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              tabIndex={-1}
              variant="link"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button type="button" className="w-full" onClick={handleSubmit}>
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
