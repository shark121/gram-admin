import React from "react";
import { motion as m } from "framer-motion";

function Logo({ height, width }: { height?: string; width?: string }) {
  let getHeight = height || "100%";
  let getWidth = width || "100%";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getWidth}
      height={getHeight}
      version="1"
      viewBox="-10 0 900 600"
      fill="#343434"
      className="logoSvg "
    >
      <path
        d="M3388 3533c-54-57-88-152-74-206 6-26 48-47 94-47 23 0 24-3 18-37-11-63-93-219-197-372-54-81-110-159-124-176l-26-30 3 225c2 124-1 231-5 238-5 6-21 12-37 12-23 0-30-6-39-31-6-18-11-40-11-49s-14-45-31-79c-57-115-156-156-220-92-61 62-33 235 52 320 74 75 175 92 260 44 54-31 81-26 87 16 5 30-14 50-73 77-143 67-327-11-407-173-28-57-33-79-36-159-4-81-1-99 18-139 58-120 206-140 316-43l34 30v-314l-34-41c-174-215-307-559-310-802-1-88 2-106 24-150 31-63 78-95 137-95 61 0 103 20 146 70 91 107 127 317 127 748v233l89 117c192 253 315 466 341 590l13 63 66-3 66-3-1-65c-1-36-5-106-9-157-10-113 3-165 53-224 44-51 85-69 154-69 74 0 143 35 216 109l59 61 29-57c69-134 226-139 339-10l44 51 10-26c15-39 72-99 108-114 145-61 307 80 455 396 46 96 81 150 93 139 10-10 10-82 1-300-8-203-8-207 13-228 26-26 61-27 94-1 14 11 54 73 88 138 88 166 164 286 200 316s42 31 64 10c14-14 15-41 9-233-8-245-5-261 50-261 45 0 62 21 151 190 101 192 161 280 208 305 35 19 37 19 54 2 16-16 18-38 18-190 0-192 9-227 69-270 47-33 145-31 206 5 60 35 128 109 190 205 61 94 79 145 60 168-21 25-62 15-79-20-35-69-108-183-140-218-65-72-145-96-192-58-24 19-24 22-24 203 0 159-2 188-18 211-43 66-122 79-200 33-57-33-112-108-202-276l-66-125 6 147c7 164-1 211-41 252-51 51-154 28-216-49-34-43-77-113-151-248l-65-119 5 219c4 207 4 220-16 250-22 35-56 49-96 39-46-12-95-78-172-233-79-158-136-242-197-288-44-34-107-44-140-22-35 24-66 95-73 173-7 87-16 104-53 104-26 0-31-5-41-42-25-92-31-107-60-152-67-101-174-115-218-29-6 12-11 52-11 90 0 75 25 142 74 200 62 73 188 97 260 48 56-38 96-29 96 20 0 46-94 94-182 95-136 0-229-68-326-239-35-61-84-136-109-167-89-109-186-144-251-89-46 38-56 74-48 168 3 45 9 117 13 159 10 132-21 168-147 168h-70v28c0 41-26 121-46 143-25 28-66 24-96-8zm52-123c0-36-2-40-25-40-29 0-31 10-10 50 21 41 35 37 35-10zm-453-1262c-8-338-37-494-107-568-24-26-36-31-66-28-60 5-79 40-78 146 1 99 14 167 56 302 42 133 170 390 194 390 4 0 4-109 1-242zM6761 3542c-38-20-71-73-71-112 0-62 68-130 130-130s130 68 130 130-68 130-130 130c-14 0-41-8-59-18z"
        transform="matrix(.1 0 0 -.1 0 600)"
      ></path>
      <circle
        cx="680"
        cy="259"
        r="16"
        // stroke="black"
        // stroke-width="3"
        fill="#ff0066"
      />
    </svg>
  );
}

export default Logo;