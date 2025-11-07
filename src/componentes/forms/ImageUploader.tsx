import React, { useMemo } from 'react';

export type UploadFile = { file: File; url: string };

export default function ImageUploader({
  files, onChange, multiple = true,
}: { files: UploadFile[]; onChange: (f: UploadFile[]) => void; multiple?: boolean }) {

  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    const fl = Array.from(e.target.files ?? []);
    const mapped = fl.map(f => ({ file: f, url: URL.createObjectURL(f) }));
    onChange(multiple ? [...files, ...mapped] : (mapped[0] ? [mapped[0]] : []));
  }

  const previews = useMemo(() => files.map((f, i) => (
    <div key={i} style={{
      width: 90, height: 90, borderRadius: 10, overflow: 'hidden',
      border: '2px solid #00000018', background: '#f6f8fb', display:'flex',
      alignItems:'center', justifyContent:'center'
    }}>
      <img src={f.url} alt={`img-${i}`} style={{ maxWidth:'100%', maxHeight:'100%' }} />
    </div>
  )), [files]);

  return (
    <div style={{ display:'grid', gap:8 }}>
      <input type="file" accept="image/*" multiple={multiple} onChange={handle} />
      <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>{previews}</div>
    </div>
  );
}
