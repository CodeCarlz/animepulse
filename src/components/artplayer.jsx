"use client";
import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import { MdOutlineSubtitles } from "react-icons/md";
import Hls from "hls.js";

export default function Player({ animeVideo, option, getInstance, ...rest }) {
  const artRef = useRef();

  function playM3u8(video, url, art) {
    if (Hls.isSupported()) {
      if (art.hls) art.hls.destroy();
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      art.hls = hls;
      art.on("destroy", () => hls.destroy());
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    } else {
      art.notice.show = "Unsupported playback format: m3u8";
    }
  }

  let select = [];
  animeVideo.sources.map((e) => {
    if (e.quality === "backup" || e.quality === "default") return;
    select.unshift({
      html: e.quality,
      url: `https://m3u8-proxy-cors-lime.vercel.app/cors?url=${e.url}`,
    });
  });

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
      url: `https://www081.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1703882952.360.m3u8`,
      // poster: "/one_piece.jpg",
      volume: 0.5,
      isLive: false,
      muted: false,
      autoplay: false,
      pip: true,
      autoSize: false,
      screenshot: true,
      setting: true,
      loop: true,
      flip: false,
      playbackRate: false,
      aspectRatio: true,
      fullscreen: true,
      fullscreenWeb: true,
      miniProgressBar: true,
      mutex: true,
      backdrop: true,
      playsInline: true,
      autoPlayback: true,
      airplay: true,
      theme: "#23ade5",
      lang: navigator.language.toLowerCase(),
      moreVideoAttr: {
        crossOrigin: "anonymous",
      },
      customType: {
        m3u8: playM3u8,
      },
      settings: [
        {
          width: 100,
          html: "Quality",
          tooltip: "Auto",
          icon: `<img width="22" heigth="22" src=""`,
          selector: [
            {
              html: "360P",
              tooltip: "Show",
              switch: true,
              onSwitch: function (item) {
                item.tooltip = item.switch ? "Hide" : "Show";
                art.subtitle.show = !item.switch;
                return !item.switch;
              },
            },
          ],
          onSelect: function (item) {
            art.subtitle.switch(item.url, {
              name: item.html,
            });
            return item.html;
          },
        },
      ],
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, []);

  return <div ref={artRef} {...rest} className="w-full   h-full"></div>;
}
