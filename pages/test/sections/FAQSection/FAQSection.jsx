import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "../../../../components/Accordion";

import styles from "./FAQSection.styles.module.scss";

const mockAccordions = [
  {
    title: "What causes ED?",
    description: (
      <p>
        Erectile dysfunction (ED) can be attributed to various physiological and
        psychological factors, such as stress, anxiety, and depression. However,
        the common underlying issue is often related to insufficient blood flow
        or nervous stimulation required to achieve a full and lasting erection.
        Recognizing ED is crucial because it can serve as an early indication of
        potential heart or other health problems, including cardiovascular
        disease and diabetes. Understanding these factors can help address and
        manage the condition effectively.
      </p>
    ),
  },
  {
    title: "Is ED common?",
    description: (
      <p>
        Erectile dysfunction (ED) is remarkably prevalent, with 52% of men
        experiencing some degree of it after reaching the age of 40.
        Surprisingly, ED can also impact younger men; a recent study discovered
        that one in four patients seeking initial medical assistance for new
        onset ED was younger than 40 years old. This highlights the significance
        of recognizing and addressing this issue across different age groups.
      </p>
    ),
  },
  {
    title: "Is Sildenafil the same as Viagra?",
    description: (
      <p>
        Sildenafil is the active ingredient in Viagra, which is a prescription
        medication used to treat erectile dysfunction (ED). It works by relaxing
        the blood vessels and increasing blood flow to certain areas of the
        body, including the penis, which helps to achieve and maintain an
        erection during sexual stimulation. You can expect the same
        effectiveness and reliability of Viagra with Sildenafil as both
        medications have the same active ingredient. The only difference is that
        Sildenafil (Generic Viagra) pills cost 90% less compared to brand-name
        Viagra.
      </p>
    ),
  },
  {
    title: "How does Sildenafil work for ED?",
    description: (
      <p>
        Erectile dysfunction occurs when there is insufficient blood flow to the
        penis, making it difficult to achieve and maintain an erection during
        sexual stimulation. Sildenafil belongs to a class of drugs called
        phosphodiesterase type 5 (PDE5) inhibitors.
        <br />
        <br />
        When a man is sexually aroused, the body releases nitric oxide in the
        erectile tissue of the penis, which activates an enzyme called guanylate
        cyclase. Guanylate cyclase produces cyclic guanosine monophosphate
        (cGMP), which helps relax the smooth muscles in the penile blood
        vessels, allowing them to widen and facilitate increased blood flow into
        the penis. This increased blood flow leads to an erection. However,
        another enzyme called phosphodiesterase type 5 (PDE5) can break down
        cGMP, leading to a decrease in blood flow and causing the loss of
        erection. Sildenafil inhibits PDE5, preventing it from breaking down
        cGMP. As a result, cGMP levels remain higher, allowing the blood vessels
        to remain relaxed and dilated, which sustains the erection for a longer
        period.
      </p>
    ),
  },
  {
    title: "What advantages does Sildenafil have?",
    description: (
      <p>
        The primary advantage of taking Sildenafil is its ability to enhance
        erections in men who suffer from erectile dysfunction. Since Sildenafil
        and Viagra are essentially the same medication, the main advantage of
        Sildenafil (Generic Viagra) is its affordable price, which is 90% less
        compared to its brand-name counterpart.
      </p>
    ),
  },
  {
    title: "How effective is Sildenafil in treating ED?",
    description: (
      <p>
        Sildenafil has been proven to be highly effective in treating erectile
        dysfunction (ED). Clinical trials and real-world studies have
        consistently shown that sildenafil helps a significant number of men
        with ED to achieve and maintain erections suitable for sexual activity.
        <br />
        <br />
        The effectiveness of sildenafil can vary depending on individual factors
        such as the underlying cause of erectile dysfunction, overall health,
        and adherence to the prescribed dosage and instructions. However,
        overall, sildenafil has a success rate of approximately 60% to 85% in
        improving erectile function.
      </p>
    ),
  },
  {
    title: "Are there men who cannot take Sildenafil?",
    description: (
      <div>
        <p>
          Yes, certain groups of men should avoid taking sildenafil or use it
          with caution due to potential health risks and interactions. It's
          essential to consult a healthcare professional before starting
          treatment with sildenafil to determine if it is safe and appropriate
          for individual circumstances.
        </p>
        <br />
        <p>
          <strong>
            Men who fall into the following categories may need to avoid or use
            sildenafil with caution:
          </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Men taking nitrates:</strong> Sildenafil should not be
              used in combination with nitrates, which are often prescribed for
              chest pain (angina) and certain heart conditions. The combination
              of sildenafil and nitrates can cause a dangerous drop in blood
              pressure, which can be life-threatening.
            </p>
          </li>
          <li>
            <p>
              <strong>Men with severe heart or liver conditions:</strong>{" "}
              Sildenafil can put additional stress on the heart, so individuals
              with severe heart problems or significant liver impairment may be
              at risk of complications. A healthcare provider will assess the
              overall health and risks before prescribing sildenafil in such
              cases.
            </p>
          </li>
          <li>
            <p>
              <strong>Men with low blood pressure:</strong> Sildenafil can lower
              blood pressure, so individuals with already low blood pressure may
              experience further drops, leading to dizziness, fainting, or other
              adverse effects.
            </p>
          </li>
          <li>
            <p>
              <strong>Men with certain eye conditions:</strong> Sildenafil can
              cause changes in color vision and may exacerbate certain eye
              conditions. Men with a history of retinitis pigmentosa or other
              eye disorders should exercise caution and discuss the risks with
              their healthcare provider.
            </p>
          </li>
          <li>
            <p>
              <strong>Men with a history of priapism:</strong> Priapism is a
              prolonged and painful erection that lasts for more than four
              hours. Men with a history of priapism should use sildenafil
              cautiously, as the drug may increase the risk of this condition.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Men with certain medications or health conditions:
              </strong>{" "}
              Sildenafil may interact with other medications, including some
              antibiotics, antifungals, and alpha-blockers. It is crucial to
              disclose all current medications and medical conditions before
              starting sildenafil.
            </p>
          </li>
          <li>
            <p>
              <strong>Men under 18 years of age:</strong> Sildenafil is
              generally not prescribed for adolescents under the age of 18.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "How should I take Sildenafil?",
    description: (
      <p>
        Sildenafil is designed to be taken on an as-needed basis, usually 30-60
        minutes before engaging in sexual activity. It offers the flexibility to
        be consumed with or without food, depending on individual preferences.
        However, it's important to note that Sildenafil should not be taken more
        than once a day. Adhering to these guidelines ensures safe and effective
        usage of the medication for the best results.
      </p>
    ),
  },
  {
    title: "Do I need to have a prescription before buying Sildenafil?",
    description: (
      <p>
        Sildenafil is a prescription medication. This means you would need a
        valid prescription from a licensed healthcare provider, such as a doctor
        or a urologist, to purchase Sildenafil from a pharmacy or an online
        pharmacy based in the US. At PureBlue, getting Sildenafil online is
        hassle-free, as you don't require an existing prescription. Our
        straightforward online medical screening process allows you to share
        your medical information, and our US-licensed physicians will then
        prescribe the appropriate treatment for you. Once prescribed, your
        medications will be conveniently delivered directly to your doorstep
        from our trusted partner pharmacy. Rest assured that all generic
        medications available through PureBlue are FDA-approved, ensuring
        high-quality and safe medications for your needs.
      </p>
    ),
  },
  {
    title: "Do I need insurance to buy Sildenafil?",
    description: (
      <p>
        No. In most US-based healthcare insurance policies, ED medication, such
        as Sildenafil is not covered. However, you may purchase Sildenafil from
        PureBlue without insurance, while paying only a fraction of the cost of
        getting ED medication through traditional means.
      </p>
    ),
  },
  {
    title: "How fast does Sildenafil work?",
    description: (
      <p>
        Sildenafil is quickly absorbed by the body, typically taking effect
        within 30-60 minutes after consumption. To ensure its optimal
        performance, it's crucial to take it on an empty stomach. Avoiding a
        meal is recommended because the presence of fat in a meal can reduce and
        delay Sildenafil's absorption, potentially leading to a decrease in its
        effectiveness. By following these guidelines, you can maximize the
        benefits of Sildenafil for your needs.
      </p>
    ),
  },
  {
    title: "How long do the effects of Sildenafil last?",
    description: (
      <p>
        The duration of Sildenafil's effects typically spans between 2 to 3
        hours. However, in certain instances, it can last even longer, extending
        up to 5 hours or more. The actual duration may vary depending on factors
        such as your dosage, your body's metabolism, and other individual
        considerations. Being aware of these factors can help you better
        understand the effects of Sildenafil and plan accordingly for your
        desired results.
      </p>
    ),
  },
  {
    title: "Will sildenafil work for me?",
    description: (
      <p>
        Sildenafil is highly effective for the majority of men, with
        approximately 4 out of 5 experiencing positive results. It has been
        shown to assist these men in achieving and maintaining erections that
        are sufficiently firm for sexual activity. This impressive success rate
        highlights Sildenafil's reliability and its potential to enhance the
        sexual experiences of many individuals facing erectile difficulties.
      </p>
    ),
  },
  {
    title: "Is it dangerous to buy Sildenafil online?",
    description: (
      <p>
        It can be dangerous to purchase Sildenafil online as you may be targeted
        by scams and companies that sell substandard or mislabeled medication.
        At PureBlue, you can be assured that all our pills are produced by
        reputable pharmaceutical companies strictly regulated by the FDA.
        Additionally, every doctor you encounter through our platform is fully
        licensed to prescribe medication and provide medical care in your state.
        They diligently adhere to all relevant medical laws and regulations in
        the United States, ensuring your safety and well-being throughout your
        treatment journey. Your health is our priority, and we strive to
        maintain the highest standards of quality and compliance to deliver the
        best possible care.
      </p>
    ),
  },
  {
    title: "What are the side effects associated with Sildenafil?",
    description: (
      <div>
        <p>
          Sildenafil, like any medication, can have side effects. Not everyone
          will experience these side effects, and their severity can vary from
          person to person.
        </p>
        <br />
        <p>
          <strong>Common side effects of sildenafil include:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Headache:</strong> One of the most common side effects
              reported by users of sildenafil is a headache. It may range from
              mild to severe.
            </p>
          </li>
          <li>
            <p>
              <strong>Flushing:</strong> Some individuals may experience a warm
              sensation and redness in the face, neck, or chest after taking
              sildenafil.
            </p>
          </li>
          <li>
            <p>
              <strong>Dizziness or lightheadedness:</strong> Sildenafil can
              cause a drop in blood pressure, leading to feelings of dizziness
              or lightheadedness.
            </p>
          </li>
          <li>
            <p>
              <strong>Nasal congestion:</strong> Some people may experience a
              stuffy or runny nose.
            </p>
          </li>
          <li>
            <p>
              <strong>Indigestion or upset stomach:</strong> Sildenafil can
              occasionally cause gastrointestinal discomfort, such as
              indigestion or an upset stomach.
            </p>
          </li>
          <li>
            <p>
              <strong>Vision changes:</strong> Some individuals may notice a
              slight bluish tint to their vision or experience sensitivity to
              light.
            </p>
          </li>
          <li>
            <p>
              <strong>Back pain or muscle aches:</strong> These side effects are
              reported less frequently but can occur in some users.
            </p>
          </li>
        </ul>
        <p>
          <strong>
            It's important to note that serious side effects of sildenafil are
            relatively rare but can include:
          </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Priapism:</strong> A prolonged and painful erection
              lasting for more than four hours. If this occurs, seek immediate
              medical attention to avoid potential complications.
            </p>
          </li>
          <li>
            <p>
              <strong>Sudden hearing or vision loss:</strong> While rare, sudden
              hearing or vision loss has been reported in some individuals using
              sildenafil. If you experience any sudden changes in hearing or
              vision, seek medical attention promptly.
            </p>
          </li>
          <li>
            <p>
              <strong>Allergic reactions:</strong> In rare cases, some people
              may experience allergic reactions to sildenafil, leading to
              symptoms such as rash, itching, swelling, severe dizziness, or
              difficulty breathing. Seek emergency medical help if you have any
              signs of an allergic reaction.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "What drugs interact with Sildenafil?",
    description: (
      <div>
        <p>
          Sildenafil can interact with certain drugs. These interactions can
          lead to adverse effects or reduce the effectiveness of either
          medication. It's essential to disclose all the medications you are
          taking, including prescription drugs, over-the-counter medications,
          herbal supplements, and recreational drugs, before starting
          sildenafil.
        </p>
        <br />
        <p>
          <strong>
            Some of the drugs that may interact with sildenafil include:
          </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Nitrates:</strong> Taking sildenafil with nitrates,
              commonly prescribed for chest pain or angina, can cause a severe
              drop in blood pressure, leading to dizziness, fainting, or even a
              life-threatening situation. Nitrates include medications like
              nitroglycerin, isosorbide dinitrate, and isosorbide mononitrate.
            </p>
          </li>
          <li>
            <p>
              <strong>Alpha-blockers:</strong> Alpha-blockers prescribed for
              conditions like hypertension (high blood pressure) or benign
              prostatic hyperplasia (BPH) can also lower blood pressure.
              Combining them with sildenafil can lead to a significant drop in
              blood pressure, resulting in dizziness or fainting. Alpha-
              blockers include drugs like doxazosin, terazosin, and tamsulosin.
            </p>
          </li>
          <li>
            <p>
              <strong>Other ED medications:</strong> Concurrent use of multiple
              erectile dysfunction medications, such as sildenafil with other
              phosphodiesterase type 5 (PDE5) inhibitors like tadalafil or
              vardenafil, can increase the risk of side effects and
              complications.
            </p>
          </li>
          <li>
            <p>
              <strong>Protease inhibitors:</strong> Medications used to treat
              HIV or certain viral infections, such as ritonavir and saquinavir,
              can increase sildenafil levels in the blood, potentially leading
              to a higher risk of side effects.
            </p>
          </li>
          <li>
            <p>
              <strong>Antifungal medications:</strong> Some antifungal drugs,
              like ketoconazole and itraconazole, can also increase sildenafil
              levels, potentially increasing the risk of adverse effects.
            </p>
          </li>
          <li>
            <p>
              <strong>Antibiotics:</strong> Certain antibiotics, like
              erythromycin and clarithromycin, may increase sildenafil levels in
              the blood, leading to an increased risk of side effects.
            </p>
          </li>
          <li>
            <p>
              <strong>Grapefruit juice:</strong> Grapefruit juice can inhibit
              the breakdown of sildenafil in the body, potentially leading to
              higher levels of the medication and an increased risk of side
              effects.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "What are the alternatives to Sildenafil?",
    description: (
      <p>
        Aside from Sildenafil, another type of medication you may consider is
        Tadalafil, or Generic Cialis. Tadalafil is the active ingredient in
        Cialis, the ED medication best known for its versatility and
        effectiveness. Compared to Sildenafil, Tadalafil stays effective in your
        system for much longer – up to 36 hours. You may consider taking
        Tadalafil instead of Sildenafil if you prefer taking your ED medication
        hours before you expect sexual activity, as opposed to Sildenafil, which
        is taken as needed, about 30-60 minutes before sexual activity.
      </p>
    ),
  },
];

const FAQSection = () => {
  return (
    <section className={styles.faqSection}>
      <Container>
        <Row className={styles.row}>
          <Col>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={12} lg={8} style={{ margin: "auto" }}>
            <Accordion items={mockAccordions} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
