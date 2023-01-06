import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export interface TransProps {
  children: string;
}

export const Trans = memo(function Trans(props: TransProps) {
  const { t } = useTranslation();

  return t(props.children);
});
