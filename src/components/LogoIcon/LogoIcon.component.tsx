import React, { SVGProps, FC } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const LogoIcon: FC<Props> = ({ color, ...svgProps }) => (
  <svg stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" viewBox="0 0 59 53" {...svgProps}>
    {!color && (
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-1">
          <stop stopColor="#262262" offset="0%" />
          <stop stopColor="#662D91" offset="100%" />
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-2">
          <stop stopColor="#BE1E2D" offset="0%" />
          <stop stopColor="#EE2A7B" offset="100%" />
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-3">
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#231F20" offset="100%" />
        </linearGradient>
        <linearGradient x1="709%" y1="5669%" x2="709%" y2="0%" id="linearGradient-4">
          <stop stopColor="#262262" offset="0%" />
          <stop stopColor="#662D91" offset="100%" />
        </linearGradient>
      </defs>
    )}
    <path className="logo-right" fill={color || 'url(#linearGradient-1)'} d="M44 0 L59 9 v35 L44 53z" />
    <path
      className="logo-bottom-right"
      fill={color || 'url(#linearGradient-2)'}
      d="M1 44 L29.5 26.5 L59 44 L44 53 L29.5 44 L15 53z"
    />
    <path
      className="logo-bottom-left"
      fill={color || 'url(#linearGradient-3)'}
      opacity="0.4"
      style={{ mixBlendMode: 'multiply' }}
      d="M0 44 L29.5 26.5 L15 53z"
    />
    <path className="logo-left" fill={color || 'url(#linearGradient-4)'} d="M0 9 L15 0 v53 L0 44z" />
  </svg>
);

export default LogoIcon;
