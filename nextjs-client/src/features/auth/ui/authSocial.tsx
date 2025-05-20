import { Button } from "@/shared/ui";
import { FaGoogle, FaYandex } from "react-icons/fa";

export function AuthSocial() {
  return (
    <div className="mb-6 grid grid-cols-2 gap-6">
      <Button variant="outline">
        <FaGoogle className="mr-2 size-4" />
        Google
      </Button>
      <Button variant="outline">
        <FaYandex className="mr-2 size-4" />
        Яндекс
      </Button>
    </div>
  );
}
