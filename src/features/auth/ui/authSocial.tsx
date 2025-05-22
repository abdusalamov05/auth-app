import { Button } from "@/shared/ui";
import Image from "next/image";

export function AuthSocial() {
  return (
    <div className="mb-6 grid grid-cols-2 gap-6">
      <Button variant="outline">
        <Image
          className="mr-2"
          width={16}
          height={16}
          src="/google.png"
          alt="google"
        />
        Google
      </Button>
      <Button variant="outline">
        <Image
          className="mr-2"
          width={10}
          height={16}
          src="/yandex.png"
          alt="yandex"
        />
        Яндекс
      </Button>
    </div>
  );
}
