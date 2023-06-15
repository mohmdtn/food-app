import { Skeleton } from "@mui/material";

export const SearchSkeleton = () => {
  return (
    <main>
      <section className="search px-4">
        <h5 className="page-title py-4">جست و جو</h5>
        <section className="d-flex justify-content-between">
            <Skeleton animation="wave" variant="rounded" width={240} height={44} sx={{ borderRadius : '12px' }} />
            <Skeleton animation="wave" variant="rounded" width={86} height={44} sx={{ borderRadius : '12px' }} />
        </section>
        <section className="d-flex justify-content-between pt-3">
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
            <Skeleton animation="wave" variant="rounded" width={82} height={28} sx={{ borderRadius : '8px' }} />
        </section>
        <section className="box mt-3">
            <div className="d-flex justify-content-between align-items-end mb-3">
                <Skeleton animation="wave" variant="rounded" width={"100%"} height={92} sx={{ borderRadius : '0' }} />
            </div>
            <div className="d-flex justify-content-between align-items-center px-3 pb-2">
                <div>
                    <Skeleton className="mb-2" animation="wave" variant="h1" width={120} />
                    <Skeleton className="mb-2" animation="wave" variant="p" width={150} />
                    <Skeleton className="mb-2" animation="wave" variant="p" width={190} />
                </div>
                <Skeleton className="ms-4" animation="wave" variant="rounded" width={53} height={53} sx={{ borderRadius : '12px' }} />
            </div>
        </section>

        <section className="box mt-3">
            <div className="d-flex justify-content-between align-items-end mb-3">
                <Skeleton animation="wave" variant="rounded" width={"100%"} height={92} sx={{ borderRadius : '0' }} />
            </div>
            <div className="d-flex justify-content-between align-items-center px-3 pb-2">
                <div>
                    <Skeleton className="mb-2" animation="wave" variant="h1" width={120} />
                    <Skeleton className="mb-2" animation="wave" variant="p" width={150} />
                    <Skeleton className="mb-2" animation="wave" variant="p" width={190} />
                </div>
                <Skeleton className="ms-4" animation="wave" variant="rounded" width={53} height={53} sx={{ borderRadius : '12px' }} />
            </div>
        </section>

        <section className="box mt-3">
            <div className="d-flex justify-content-between align-items-end mb-3">
                <Skeleton animation="wave" variant="rounded" width={"100%"} height={92} sx={{ borderRadius : '0' }} />
            </div>
            <div className="d-flex justify-content-between align-items-center px-3 pb-2">
                <div>
                    <Skeleton className="mb-2" animation="wave" variant="h1" width={120} />
                    <Skeleton className="mb-2" animation="wave" variant="p" width={150} />
                    <Skeleton className="mb-2" animation="wave" variant="p" width={190} />
                </div>
                <Skeleton className="ms-4" animation="wave" variant="rounded" width={53} height={53} sx={{ borderRadius : '12px' }} />
            </div>
        </section>
      </section>
    </main>
  );
};
