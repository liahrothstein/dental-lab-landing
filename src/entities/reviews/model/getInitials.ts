export function getInitials(author: string): string {
  return author.split(' ').map((part) => part[0]).join('').toUpperCase();
}