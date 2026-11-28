-- Rolled-back test for 002_done_per_child.sql. Paste 002 first, then this, in one run. Nothing persists.
begin;
-- (paste supabase/002_done_per_child.sql here)
do $$
declare ok_dup boolean := false; ok_name boolean := false;
begin
  insert into public.lkg_reviews (code, kind, who, status, created_at, updated_at)
    values ('TEST-DONE', 'done', '00000000-0000-0000-0000-000000000001', 'done', now(), now());
  begin
    insert into public.lkg_reviews (code, kind, who, status, created_at, updated_at)
      values ('TEST-DONE', 'done', '00000000-0000-0000-0000-000000000001', 'done', now() + interval '1 second', now());
  exception when unique_violation then ok_dup := true;
  end;
  begin
    insert into public.lkg_reviews (code, kind, who, status, created_at, updated_at)
      values ('TEST-DONE', 'done', 'Kip', 'done', now(), now());
  exception when check_violation then ok_name := true;
  end;
  raise exception 'RESULT: duplicate refused=% (want true), a name refused=% (want true)', ok_dup, ok_name;
end $$;
rollback;
