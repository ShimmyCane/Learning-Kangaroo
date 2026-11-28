-- ============================================================================
-- Learning Kangaroo — 002: completion per child (NOT APPLIED).
-- The digital practice page (tools/overlay/) saves "this child did this worksheet".
-- It needs: a 'done' kind, and a child's family member id in `who` (today only 'younger' / 'older').
-- Run supabase/test_002_done_rollback.sql first (it ends with a rollback). Apply only after the owner says yes.
-- No names go in this table: `who` holds the family member's id (a uuid), never a name.
-- ============================================================================

alter table public.lkg_reviews drop constraint if exists lkg_reviews_kind_check;
alter table public.lkg_reviews add constraint lkg_reviews_kind_check
  check (kind in ('flag', 'rating', 'result', 'printed', 'done'));

alter table public.lkg_reviews drop constraint if exists lkg_reviews_who_check;
alter table public.lkg_reviews add constraint lkg_reviews_who_check
  check (who in ('', 'younger', 'older')
         or who ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');

-- one completion per worksheet per child
create unique index if not exists lkg_reviews_done_once
  on public.lkg_reviews (code, who) where kind = 'done';

comment on column public.lkg_reviews.who is 'younger / older for the paper marks; a family member id (uuid) for done rows. Never a name.';
