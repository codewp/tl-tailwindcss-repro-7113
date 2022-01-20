import React, { useState } from "react";

export default function App() {
  const [settings, setSettings] = useState({
    name: "Name",
  });

  const updateSettings = (field, value) => {
    let update = Object.assign({}, settings, { [field]: value });
    setSettings(update);
  };

  return (
    <div className="asnp-app asnp-mt-4 asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-6">
      <label className="asnp-block asnp-space-y-1">
        <span className="asnp-field-title">Name</span>
        <input
          type="text"
          className="asnp-block asnp-text-field"
          value={settings.name}
          onChange={(e) => updateSettings("name", e.target.value)}
        />
      </label>
      <div className="asnp-flex">
        <div className="asnp-w-1/2 asnp-bg-rose-500">w-1/2</div>
        <div className="asnp-w-1/2 asnp-bg-indigo-500 asnp-bg-gray-200">
          w-1/2
        </div>
      </div>
      <div className="asnp-flex">
        <div className="asnp-w-1/2 asnp-h-10 asnp-bg-gray-500 asnp-text-white">
          w-1/2
        </div>
        <div className="asnp-w-1/2 asnp-h-10 asnp-bg-green-500 asnp-text-white">
          w-1/2
        </div>
      </div>
    </div>
  );
}
