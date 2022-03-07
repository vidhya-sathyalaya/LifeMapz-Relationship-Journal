import React, { useState } from "react";

function LinkShare() {

const [copied, setCopied] = useState(false);

function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
  <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button>
  );
}

export default LinkShare;