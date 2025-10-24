'use client'
import { useState, useEffect, useMemo } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ListFilter, Search, ArrowUpDown, ChevronRight } from 'lucide-react'
import { allTalents as fetchAllTalents, DetailedTalent } from '@/lib/talent'
import TalentListingComponent from '@/components/ui/talentlisting-component'
import { cn } from '@/lib/utils'

const TALENTS_PER_PAGE = 12

export default function CandidatesPage() {
  const [allTalents, setAllTalents] = useState<DetailedTalent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('All Roles')

  useEffect(() => {
    // Simulate fetching data
    setAllTalents(fetchAllTalents)
    setIsLoading(false)
  }, [])

  const roles = useMemo(() => {
    if (!allTalents) return ['All Roles']
    const uniqueRoles = new Set(allTalents.map((t) => t.role))
    return ['All Roles', ...Array.from(uniqueRoles)]
  }, [allTalents])

  const filteredTalents = useMemo(() => {
    return allTalents.filter((talent) => {
      const matchesSearch =
        talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.role.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesRole =
        roleFilter === 'All Roles' || talent.role === roleFilter
      return matchesSearch && matchesRole
    })
  }, [allTalents, searchQuery, roleFilter])

  const totalPages = Math.ceil(filteredTalents.length / TALENTS_PER_PAGE)
  const visibleTalents = filteredTalents.slice(
    (currentPage - 1) * TALENTS_PER_PAGE,
    currentPage * TALENTS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const paginationItems = () => {
    const items = []
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i)
      }
    } else {
      items.push(1)
      if (currentPage > 3) items.push('...')

      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      if (currentPage <= 3) {
        start = 2
        end = 4
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3
        end = totalPages - 1
      }

      for (let i = start; i <= end; i++) {
        items.push(i)
      }

      if (currentPage < totalPages - 2) items.push('...')
      items.push(totalPages)
    }
    return items
  }

  if (isLoading) {
    return <p>Loading candidates...</p>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Browse Candidates</h1>
        <p className="text-muted-foreground">
          Find the perfect talent for your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name or role..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
          />
        </div>
        <Select
          value={roleFilter}
          onValueChange={(value) => {
            setRoleFilter(value)
            setCurrentPage(1)
          }}
        >
          <SelectTrigger className="w-full gap-2">
            <ListFilter className="h-4 w-4" />
            <SelectValue placeholder="All Roles" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-full md:w-auto gap-2">
          <ArrowUpDown className="h-4 w-4" /> Sort by
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-muted-foreground text-sm">
          Showing {visibleTalents.length} of {filteredTalents.length} candidates
        </p>
      </div>

      <TalentListingComponent
        talents={visibleTalents}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      />

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </Button>
          {paginationItems().map((page, index) => (
            <Button
              key={index}
              variant={page === currentPage ? 'default' : 'outline'}
              className={cn(
                'w-10',
                page === currentPage && 'bg-primary-gradient'
              )}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={typeof page !== 'number'}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
