export function NameRegex(name: string) {
  return new RegExp(name.split(' ').join('.*\\ .*'), 'i')
}
