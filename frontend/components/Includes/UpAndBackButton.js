import React from "react";
import { useRouter } from 'next/router'
import Fab from '@mui/material/Fab';
import { Stack } from "@mui/material";
import Link from "next/link";
import { ArrowBack, ArrowBackOutlined, ArrowUpward } from "@mui/icons-material";
 
export default function UpAndBackButton() {
  const router = useRouter()
 
  return (
       <Stack sx={{ position: 'fixed', zIndex:1, bottom: 16, right: 16 }}>
            <Fab sx={{ marginBottom: 1 }} size="small"  aria-label="add" onClick={()=> router.back()}>
                <ArrowBackOutlined color="secondary"/>
            </Fab>
            <Link href='#'>
                <Fab size="small" aria-label="arrow">
                    <ArrowUpward  color="secondary"/>
                </Fab>
            </Link>
        </Stack>
  )
}

