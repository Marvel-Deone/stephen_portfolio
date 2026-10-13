type ArrowProps = {
  diagonal?: boolean
}

export function Arrow({ diagonal = false }: ArrowProps) {
  return <span aria-hidden="true" className="arrow-mark ml-2 inline-block">{diagonal ? '↗' : '→'}</span>
}
