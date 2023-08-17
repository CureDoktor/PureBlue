import Image from "next/image";

const LegitScriptCertificate = () => {
  return (
    <a
      href="https://legitscript.com"
      target="_blank"
      title="Verify LegitScript Approval"
    >
      <Image
        objectFit="contain"
        layout="fill"
        src="https://static.legitscript.com/seals/16927118.png"
        alt="LegitScript approved"
      />
    </a>
  );
};

export default LegitScriptCertificate;
