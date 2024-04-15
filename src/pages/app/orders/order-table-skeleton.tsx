import { Dialog } from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button variant="outline" size="xs" disabled>
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[172px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[148px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[110px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[200px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[64px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[92]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[92]" />
        </TableCell>
      </TableRow>
    )
  })
}
