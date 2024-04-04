import React from "react";
import { timeline } from "./TimeLineObj";
import { cn } from "@/lib/utils";

const Timeline = () => {
  return (
    <div className="flow-root ">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={cn(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between  pt-1.5">
                  <div>
                    <a href={event.href} className="font-medium">
                      {event.company}
                    </a>
                    <p className="text-xs">{event.target}</p>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <time>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
