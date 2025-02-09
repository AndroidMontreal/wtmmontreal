'use client';

import { useTranslations } from 'next-intl';

export default function CodeOfConduct() {
  const t = useTranslations('code_of_conduct');

  return (
    <div className="flex flex-col py-10">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-4">{t('whyPolicy')}</p>

      <ul className="list-disc list-inside mb-4">
        {t.raw('policyReasons').map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <p className="mb-4">{t('dedicationIntro')}</p>

      <ul className="list-disc list-inside mb-4">
        {t.raw('protectedCharacteristics').map((characteristic, index) => (
          <li key={index}>{characteristic}</li>
        ))}
      </ul>

      <p className="mb-4">{t('notExhaustive')}</p>
      <p className="mb-4">{t('sexualContent')}</p>
      <p className="mb-4">{t('harassmentIntro')}</p>

      <ul className="list-disc list-inside mb-4">
        {t.raw('harassmentExamples').map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>

      <p className="mb-4">{t('complianceNote')}</p>
      <p className="mb-4">{t('exhibitorsNote')}</p>
      <p className="mb-4">{t('reportingInfo')}</p>

      <h3 className="text-xl font-bold">{t('contacts.title')}</h3>
      <ul className="list-disc list-inside mb-4">
        {t.raw('contacts.emails').map((email, index) => (
          <li key={index}>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        ))}
      </ul>

      <p className="mb-4">{t('conclusion')}</p>

      <h2 className="text-2xl font-bold">{t('license.title')}</h2>
      <p className="mb-4">{t('license.text')}</p>
    </div>
  );
}
