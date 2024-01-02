import Image from "next/image";

const LegitScriptCertificate = () => {
  return (
    <div>
      <a
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
      </a>
    </div>
  );
};

export default LegitScriptCertificate;
