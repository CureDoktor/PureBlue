import Image from "next/image";
import Link from "next/link";

const LegitScriptCertificate = () => {
  return (
    <div>
      <Link
        href="https://legitscript.com"
        target="_blank"
        title="Verify LegitScript Approval"
      >
        <Image
          objectFit="contain"
          width={150}
          height={120}
          src="https://static.legitscript.com/seals/16927118.png"
          alt="LegitScript approved"
        />
      </Link>
    </div>
  );
};

export default LegitScriptCertificate;
