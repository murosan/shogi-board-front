const rows = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
const columns = ['９', '８', '７', '６', '５', '４', '３', '２', '１']

export function rowString(r: number): string {
  return rows[r]
}

export function columnString(c: number): string {
  return columns[c]
}
