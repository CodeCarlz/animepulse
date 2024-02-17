"use client";
import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import { MdOutlineSubtitles } from "react-icons/md";
import Hls from "hls.js";

function Player({ animeVideo, option, getInstance, ...rest }) {
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
  animeVideo?.sources?.map((e) => {
    if (e.quality === "backup" || e.quality === "default") return;
    select.unshift({
      html: e.quality,
      url: `${e.url}`,
    });
  });

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
      url: `${animeVideo?.sources[5]?.url ?? animeVideo?.sources[6]?.url}`,
      // poster: "/one_piece.jpg",
      volume: 1,
      isLive: false,
      muted: false,
      autoplay: false,
      pip: true,
      autoSize: true,
      screenshot: true,
      setting: true,
      loop: true,
      flip: true,
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
          html: "Quality",
          width: 150,
          tooltip: "Default",
          selector: select,
          onSelect: function (item, $dom, event) {
            console.info(item, $dom, event);
            art.switchQuality(item.url, item.html);
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
export default Player;
