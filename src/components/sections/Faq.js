import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Who are you guys?',
    content: () => (
      <>
        We are Darren and Vlasto - Dasto geddit? We are development wizards who
        have spent the last few decades building some beloved software, and we
        could work for you!
      </>
    ),
  },
  {
    title: 'How can I hire you?',
    content: () => (
      <>
        Just start with an <a href="mailto:hello@dasto.dev">email to us</a> and
        we can discuss everything with you, zero strings.
      </>
    ),
  },
  {
    title: 'What exactly can you do?',
    content: () => (
      <>
        We can build almost anything, but specifically we have worked on massive
        scale SaaS platforms. If you have a startup idea for a social, technical
        or ecommerce product chances are we have experience of putting on
        together. For everything <em>else we love a challenge</em>, so get in
        touch.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
