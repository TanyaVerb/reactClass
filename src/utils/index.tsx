//

export function classNames(mainClass, mods = {}, additional = []) {
  return [
    mainClass,
    ...additional.filter(Boolean), //те классы, кот. не undefined или null
    ...Object.entries(mods)
      .filter(([className, value]) =>
        Boolean(className !== "undefined" && value)
      )
      .map(([className]) => className),
  ].join(" ");
}
